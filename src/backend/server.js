import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import cors from "cors";
import { watermarkImageWithData } from "./watermarking.js";
import { extractWatermarkedData } from "./extract-data.js";
import { transcribeUrl } from "./speechToText.js";
import { setTranscript, getTranscript } from "./Firestore/Database.js";

// Boilerplate code start
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

//JSON to Object
app.use(express.json());

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
// Boilerplate code end

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

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
    const transcript = await transcribeUrl(formData.transcript);
    console.log("Inside Post api --> ", transcript);
    setTranscript(transcript);
    res
      .status(200)
      .send({ message: "Form submitted successfully!", transcript });
  } catch (err) {
    console.log(err);
  }
});

app.get("/cosultationResult", async (req, res) => {
  try {
    const data = await getTranscript();
    res.status(200).send({
      message: "Successfully!",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
});
