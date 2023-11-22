import sharp from "sharp";
import fs from "fs/promises";

const imagePath = "/home/ahmad/hayat_medical/public/images/image.jpg";

async function extractPixels(imagePath) {
  try {
    const [redPixels, greenPixels, bluePixels] = await Promise.all([
      sharp(imagePath).extractChannel('red').raw().toBuffer(),
      sharp(imagePath).extractChannel('green').raw().toBuffer(),
      sharp(imagePath).extractChannel('blue').raw().toBuffer()
    ]);

    return {
      redPixels: Array.from(redPixels),
      greenPixels: Array.from(greenPixels),
      bluePixels: Array.from(bluePixels)
    };
  } catch (err) {
    console.error("Error extracting pixel data:", err);
  }
}

async function writeToFile(filePath, data) {
  try {
    await fs.writeFile(filePath, data.join(','));
    console.log("Output written to", filePath);
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

async function createImageFromPixels(redPixels, greenPixels, bluePixels, outputPath) {
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

  await sharp(Buffer.from(imageData.buffer), { raw: { width, height, channels: 4 } })
    .toFile(outputPath);
}

async function main() {
  try {
    const { redPixels, greenPixels, bluePixels } = await extractPixels(imagePath);

    const x = redPixels.map(pixel => (pixel === 0 ? pixel : 255));
    const y = greenPixels.map(pixel => (pixel === 0 ? pixel : 255));
    const z = bluePixels.map(pixel => (pixel === 0 ? pixel : 255));

    await writeToFile("/home/ahmad/hayat_medical/public/images/redPixels.txt", x);
    await writeToFile("/home/ahmad/hayat_medical/public/images/greenPixels.txt", y);
    await writeToFile("/home/ahmad/hayat_medical/public/images/bluePixels.txt", z);

    await createImageFromPixels(x, y, z, "/home/ahmad/hayat_medical/public/images/reconstructedImage.png");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

main();
