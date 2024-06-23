import { storage } from "../Config/firebase.js";
import { ref, getDownloadURL } from "firebase/storage";
import sharp from "sharp";
import fetch from "node-fetch";

// Function to download image buffer from Firebase Storage
async function downloadImageBufferFromFirebase() {
  try {
    const imagePath = `Radiological Image/${patientID}/radiological.png`; // Adjust path as needed
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

// Function to extract binary data from pixel channels
function extractDataFromPixels(redPixels, greenPixels, bluePixels) {
  let binaryResult = "";

  for (let i = 0; i < redPixels.length; i++) {
    const extractLSB = (pixel) => (pixel & 1).toString();
    binaryResult +=
      extractLSB(redPixels[i]) +
      extractLSB(greenPixels[i]) +
      extractLSB(bluePixels[i]);
  }

  return binaryResult;
}

// Function to convert binary data to a string
function binaryToString(binary) {
  const chunks = binary.match(/.{1,8}/g);
  if (!chunks) {
    throw new Error("Invalid binary string");
  }

  const extractedString = chunks
    .map((chunk) => String.fromCharCode(parseInt(chunk, 2)))
    .join("");

  return extractedString;
}

// Function to parse the extracted string using the provided flags
function parseExtractedString(data) {
  const sections = {
    note: "",
    summary: "",
    drugs: [],
  };

  const noteMatch = data.match(/##S_NOTE##(.*?)##E_NOTE##/s);
  if (noteMatch) sections.note = noteMatch[1];

  const summaryMatch = data.match(/##S_SUMMARY##(.*?)##E_SUMMARY##/s);
  if (summaryMatch) sections.summary = summaryMatch[1];

  const drugsMatch = data.match(/##S_DRUGS##(.*?)##E_DRUGS##/s);
  if (drugsMatch) sections.drugs = JSON.parse(drugsMatch[1]);

  return sections;
}

// Main function to extract and parse the watermarked data
export async function extractWatermarkedData() {
  try {
    const imageBuffer = await downloadImageBufferFromFirebase();
    const { redPixels, greenPixels, bluePixels } =
      await extractPixelsFromBuffer(imageBuffer);
    const extractedBinaryString = extractDataFromPixels(
      redPixels,
      greenPixels,
      bluePixels
    );
    const extractedString = binaryToString(extractedBinaryString);
    const parsedData = parseExtractedString(extractedString);
    console.log("Parsed Data:", parsedData);
    return parsedData;
  } catch (err) {
    console.error("An error occurred:", err);
  }
}
