import sharp from "sharp";
import fs from "fs/promises";

const imagePath = "public/images/image.jpg";

// Function to extract RGB channels from an image
async function extractPixels(imagePath) {
  try {
    const [redPixels, greenPixels, bluePixels] = await Promise.all([
      sharp(imagePath).extractChannel("red").raw().toBuffer(),
      sharp(imagePath).extractChannel("green").raw().toBuffer(),
      sharp(imagePath).extractChannel("blue").raw().toBuffer(),
    ]);

    //Store each channel in an array
    return {
      redPixels: Array.from(redPixels),
      greenPixels: Array.from(greenPixels),
      bluePixels: Array.from(bluePixels),
    };
  } catch (err) {
    console.error("Error extracting pixel data:", err);
  }
}
// Skip
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

// Convert the string to a binary representation
function stringToBinary(str) {
  return Array.from(str)
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");
}

export async function watermarkImageWithData(formData) {
  try {
    const flag = " ##END##";
    //Convert Object to JSON
    // const data = "- Doctor Note:" + JSON.stringify(formData);
    const data = "- Doctor Note:" + formData.sessionSummary;

    const myString = data + flag; //- Doctor Note:Ahmad  ##END##
    console.log(data);
    const binaryString = stringToBinary(myString); //01001000 01100001 01111001 01100001 01110100
    const { redPixels, greenPixels, bluePixels } = await extractPixels(
      imagePath
    ); // Extract Three Channels

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

    await writePixelsToFile("public/images/redPixels.txt", redBinaryPixels);
    await writePixelsToFile("public/images/greenPixels.txt", greenBinaryPixels);
    await writePixelsToFile("public/images/bluePixels.txt", blueBinaryPixels);

    await createImageFromPixels(
      redBinaryPixels,
      greenBinaryPixels,
      blueBinaryPixels,
      "public/images/reconstructedImage.png"
    );
  } catch (err) {
    console.error("An error occurred:", err);
  }
}
