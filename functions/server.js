const express = require("express");
const { fileURLToPath } = require("url");
const { dirname } = require("path");
const path = require("path");
const cors = require("cors");
const { watermarkImageWithData } = require("./watermarking.js");
const { extractWatermarkedData } = require("./extract-data.js");
const { transcribeUrl } = require("./speechToText.js");
const { setTranscript, getSummary } = require("./Firestore/Database.js");
const { summarize } = require("./SummaryAgent/ChatGPT.js");

// Boilerplate code start
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//JSON to Object
app.use(express.json());

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
// Boilerplate code end

let globalDocID = null;

app.post("/watermark-image", (req, res) => {
  const formData = req.body;
  console.log("Form data received:", formData);
  watermarkImageWithData(formData);
  res.status(200).send({ message: "Form submitted successfully!" });
});

app.get("/extract-image-data", async (req, res) => {
  try {
    const watermarkedData = await extractWatermarkedData();
    res.status(200).send({
      message: "Data extracted successfully!",
      data: watermarkedData,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/diarization", async (req, res) => {
  try {
    const formData = req.body;
    console.log("Form data received:", formData);
    const transcript = await transcribeUrl(formData.url);
    console.log("transcript --> ",  transcript);
    const summary = await summarize(transcript);
    console.log("summary --> ", summary);
    const docID = await setTranscript(transcript, summary);
    console.log("docID --> ", docID);
    globalDocID = docID;
    res.status(200).send({ message: "Form submitted successfully!" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/cosultationResult", async (req, res) => {
  try {
    console.log("docID --> ", globalDocID);

    const data = await getSummary(globalDocID);

    res.status(200).send({
      message: "Successfully!",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
