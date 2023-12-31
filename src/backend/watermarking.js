import sharp from "sharp";
import fs from "fs/promises";

const imagePath =
  "/home/moutasim/Development/hayat_medical/public/images/image.jpg";

async function extractPixels(imagePath) {
  try {
    const [redPixels, greenPixels, bluePixels] = await Promise.all([
      sharp(imagePath).extractChannel("red").raw().toBuffer(),
      sharp(imagePath).extractChannel("green").raw().toBuffer(),
      sharp(imagePath).extractChannel("blue").raw().toBuffer(),
    ]);

    return {
      redPixels: Array.from(redPixels),
      greenPixels: Array.from(greenPixels),
      bluePixels: Array.from(bluePixels),
    };
  } catch (err) {
    console.error("Error extracting pixel data:", err);
  }
}

async function writePixelsToFile(filePath, pixels) {
  try {
    await fs.writeFile(filePath, pixels.join(","));
    console.log("Output written to", filePath);
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

async function createImageFromPixels(
  redPixels,
  greenPixels,
  bluePixels,
  outputPath
) {
  const width = 617;
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

function stringToBinary(str) {
  return Array.from(str)
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");
}

export async function watermarkImageWithData(formData) {
  try {
    const flag = " ##END##";
    //Convert Object to JSON
    // let drugs;

    // for (let i = 0; i < array.length; i++) {
    //   drugs = " ##stPD## " + formData.prescriptionDrugs[i] + " ##enPD##";
    // }
    const data =
      "Doctor Note:" +
      formData.doctorNote +
      "Session Summary: " +
      formData.sessionSummary;
    const myString = data + flag;
    const binaryString = stringToBinary(myString);
    const { redPixels, greenPixels, bluePixels } = await extractPixels(
      imagePath
    );

    const redBinaryPixels = redPixels;
    const greenBinaryPixels = greenPixels;
    const blueBinaryPixels = bluePixels;

    let binaryIndex = 0;

    for (
      let i = 0;
      i < redBinaryPixels.length && binaryIndex < binaryString.length;
      i++
    ) {
      const modifyChannel = (channel) =>
        channel.slice(0, -1) + binaryString.charAt(binaryIndex++);

      const newEmbedX = modifyChannel(
        redBinaryPixels[i].toString(2).padStart(8, "0")
      );
      const newEmbedY = modifyChannel(
        greenBinaryPixels[i].toString(2).padStart(8, "0")
      );
      const newEmbedZ = modifyChannel(
        blueBinaryPixels[i].toString(2).padStart(8, "0")
      );

      const convertToDecimal = (binary) => parseInt(binary, 2);

      redBinaryPixels[i] = convertToDecimal(newEmbedX);
      greenBinaryPixels[i] = convertToDecimal(newEmbedY);
      blueBinaryPixels[i] = convertToDecimal(newEmbedZ);
    }

    await writePixelsToFile(
      "/home/moutasim/Development/hayat_medical/public/images/redPixels.txt",
      redBinaryPixels
    );
    await writePixelsToFile(
      "/home/moutasim/Development/hayat_medical/public/images/greenPixels.txt",
      greenBinaryPixels
    );
    await writePixelsToFile(
      "/home/moutasim/Development/hayat_medical/public/images/bluePixels.txt",
      blueBinaryPixels
    );

    await createImageFromPixels(
      redBinaryPixels,
      greenBinaryPixels,
      blueBinaryPixels,
      "/home/moutasim/Development/hayat_medical/public/images/reconstructedImage.png"
    );
  } catch (err) {
    console.error("An error occurred:", err);
  }
}
