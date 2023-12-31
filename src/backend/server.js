import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import cors from "cors";
import { watermarkImageWithData } from "./watermarking.js";
import { extractWatermarkedData } from "./extract-data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

//JSON to Object
app.use(express.json());

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.post("/watermark-image", (req, res) => {
  const formData = req.body; // Object
  console.log("Form data received:", formData);
  watermarkImageWithData(formData);
  res.status(200).send({ message: "Form submitted successfully!" });
});

app.get("/extract-image-data", async (req, res) => {
  const watermarkedData = await extractWatermarkedData();
  res.status(200).send({
    message: "Data extracted successfully!",
    data: watermarkedData,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
