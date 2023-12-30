import sharp from "sharp";

const imagePath =
  "/home/moutasim/Development/hayat_medical/public/images/reconstructedImage.png";

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

function binaryToString(binary) {
  const chunks = binary.match(/.{1,8}/g);
  if (!chunks) {
    throw new Error("Invalid binary string");
  }

  const extractedString = chunks
    .map((chunk) => String.fromCharCode(parseInt(chunk, 2)))
    .join("");

  const endIndex = extractedString.indexOf("##END##");
  if (endIndex !== -1) {
    return extractedString.slice(0, endIndex);
  }

  return extractedString;
}

export async function extractWatermarkedData() {
  try {
    const { redPixels, greenPixels, bluePixels } = await extractPixels(
      imagePath
    );
    const extractedBinaryString = extractDataFromPixels(
      redPixels,
      greenPixels,
      bluePixels
    );
    const extractedString = binaryToString(extractedBinaryString);
    console.log("Extracted String:", extractedString);
    return extractedString;
  } catch (err) {
    console.error("An error occurred:", err);
  }
}
