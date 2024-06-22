import sharp from "sharp";

// Correctly formatted image path
const imagePath =
  "C:/Users/ahmad/OneDrive/Documents/Ahmad/hayat_medical/public/images/reconstructedImage.png";

// Function to extract RGB channels from an image
async function extractPixels(imagePath) {
  try {
    const [redPixels, greenPixels, bluePixels] = await Promise.all([
      sharp(imagePath).extractChannel("red").raw().toBuffer(),
      sharp(imagePath).extractChannel("green").raw().toBuffer(),
      sharp(imagePath).extractChannel("blue").raw().toBuffer(),
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
    // consultation: "",
    note: "",
    summary: "",
    drugs: [],
  };

  // const consultationMatch = data.match(
  //   /##S_CONSULTATION##(.*?)##E_CONSULTATION##/s
  // );
  // if (consultationMatch) sections.consultation = consultationMatch[1];

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
    const { redPixels, greenPixels, bluePixels } = await extractPixels(
      imagePath
    );
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