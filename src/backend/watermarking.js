import sharp from "sharp";
import fetch from "node-fetch";
import { storage } from "../Config/firebase.js";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import fs from "fs/promises";

// Function to download image buffer from Firebase Storage
async function downloadImageBufferFromFirebase(patientID, imageName) {
  try {
    const imagePath = `Radiological Image/${patientID}/${imageName}.png`; // Adjust path as needed
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);

    const response = await fetch(imageUrl);
    const buffer = await response.buffer();

    console.log("Image downloaded as buffer");
    return buffer;
  } catch (err) {
    console.error("Error downloading image from Firebase:", err);
  }
}

// Function to extract RGB channels from an image buffer
async function extractPixelsFromBuffer(imageBuffer) {
  try {
    const [redPixels, greenPixels, bluePixels] = await Promise.all([
      sharp(imageBuffer).extractChannel("red").raw().toBuffer(),
      sharp(imageBuffer).extractChannel("green").raw().toBuffer(),
      sharp(imageBuffer).extractChannel("blue").raw().toBuffer(),
    ]);

    // Store each channel in an array
    return {
      redPixels: Array.from(redPixels),
      greenPixels: Array.from(greenPixels),
      bluePixels: Array.from(bluePixels),
    };
  } catch (err) {
    console.error("Error extracting pixel data:", err);
  }
}

// Convert the string to a binary representation
function stringToBinary(str) {
  return Array.from(str)
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");
}

async function createImageFromPixels(
  redPixels,
  greenPixels,
  bluePixels,
  outputPath
) {
  const width = 617; // Adjust width and height to match your image dimensions
  const height = 617;

  const imageData = new Uint8Array(width * height * 4);

  for (let i = 0; i < redPixels.length; i++) {
    const index = i * 4;
    imageData[index] = redPixels[i];
    imageData[index + 1] = greenPixels[i];
    imageData[index + 2] = bluePixels[i];
    imageData[index + 3] = 255;
  }

  await sharp(Buffer.from(imageData.buffer), {
    raw: { width, height, channels: 4 },
  }).toFile(outputPath);
}

async function readImageAsBuffer(imagePath) {
  try {
    const buffer = await fs.readFile(imagePath);
    return buffer;
  } catch (err) {
    console.error("Error reading image as buffer:", err);
  }
}

async function uploadImageToFirebase(imageBuffer, patientID, imageName) {
  try {
    const imagePath = `Radiological Image/${patientID}/${imageName}.png`; // Adjust path as needed
    const imageRef = ref(storage, imagePath);
    const metadata = { contentType: "image/png" };
    await uploadBytes(imageRef, imageBuffer, metadata);
    console.log("Image uploaded to Firebase");
  } catch (err) {
    console.error("Error uploading image to Firebase:", err);
  }
}

export async function watermarkImageWithData(formData) {
  try {
    const consultationSFlag = " ##S_CONSULTATION##";
    const consultationEFlag = " ##E_CONSULTATION##";
    const noteSFlag = " ##S_NOTE## ";
    const noteEFlag = " ##E_NOTE##";
    const summarySFlag = " ##S_SUMMARY## ";
    const summaryEFlag = " ##E_SUMMARY##";
    const drugsSFlag = " ##S_DRUGS## ";
    const drugsEFlag = " ##E_DRUGS##";

    // Convert Object to JSON
    const doctorNote = JSON.stringify(formData.doctorNote);
    const summary = JSON.stringify(formData.sessionSummary);
    const drugs = JSON.stringify(formData.prescriptionDrugs);

    const myString =
      consultationSFlag +
      noteSFlag +
      doctorNote +
      noteEFlag +
      summarySFlag +
      summary +
      summaryEFlag +
      drugsSFlag +
      drugs +
      drugsEFlag +
      consultationEFlag;

    const binaryString = stringToBinary(myString);

    const imageBuffer = await downloadImageBufferFromFirebase(
      formData.patientID,
      formData.imageLabel
    );
    if (!imageBuffer) {
      throw new Error("Failed to download image buffer");
    }

    const { redPixels, greenPixels, bluePixels } =
      await extractPixelsFromBuffer(imageBuffer);
    if (!redPixels || !greenPixels || !bluePixels) {
      throw new Error("Failed to extract pixels from image buffer");
    }

    let binaryIndex = 0;
    for (
      let i = 0;
      i < redPixels.length && binaryIndex < binaryString.length;
      i++
    ) {
      const modifyChannel = (channel) =>
        channel.slice(0, -1) + binaryString.charAt(binaryIndex++);

      redPixels[i] = parseInt(
        modifyChannel(redPixels[i].toString(2).padStart(8, "0")),
        2
      );
      greenPixels[i] = parseInt(
        modifyChannel(greenPixels[i].toString(2).padStart(8, "0")),
        2
      );
      bluePixels[i] = parseInt(
        modifyChannel(bluePixels[i].toString(2).padStart(8, "0")),
        2
      );
    }

    const outputPath = "public/images/reconstructedImage.png";

    await createImageFromPixels(redPixels, greenPixels, bluePixels, outputPath);

    const newImageBuffer = await readImageAsBuffer(outputPath);
    if (!newImageBuffer) {
      throw new Error("Failed to read reconstructed image as buffer");
    }

    console.log(formData.patientID);
    await uploadImageToFirebase(
      newImageBuffer,
      formData.patientID,
      formData.imageLabel
    );
  } catch (err) {
    console.error("An error occurred:", err);
  }
}
