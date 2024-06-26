import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cors from "cors";
import { watermarkImageWithData } from "./watermarking.js";
import { extractWatermarkedData } from "./extract-data.js";
import { transcribeUrl } from "./speechToText.js";
import {
  setTranscript,
  getSummary,
  getUpcomingAppointments,
  getPhoneNumber,
  getConsultationsLog,
  getAllPatients,
  getPatientRadiologicalImages,
  getDoctorInfo,
  getPatientAppointments,
  addConsultationToDoctorAndPatient,
  getImageUrl
} from "./Firestore/Database.js";
import { summarize } from "./SummaryAgent/ChatGPT.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//JSON to Object
app.use(express.json());

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
// Boilerplate code end

let globalDocID = null;

app.get('/get-image-url', async (req, res) => {
  const { patientId, imageName } = req.query;

  if (!patientId || !imageName) {
    return res.status(400).send({ error: 'Patient ID and image name are required' });
  }

  try {
    const url = await getImageUrl(patientId, imageName);
    res.status(200).send({ url });
  } catch (error) {
    console.error('Error fetching image URL:', error);
    res.status(500).send({ error: 'Failed to fetch image URL' });
  }
});

app.get('/get-phone-number/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const phoneNumber = await getPhoneNumber(email);
    if (phoneNumber) {
      res.status(200).json({phoneNumber});
    } else {
      res.status(404).send('Phone number not found');
    }
  } catch (error) {
    console.error('Failed to fetch phone number:', error);
    res.status(500).send('Server error');
  }
});

app.get('/doctor-info/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const doctorInfo = await getDoctorInfo(email);
    if (doctorInfo) {
      res.json(doctorInfo);
    } else {
      res.status(404).send('Doctor not found');
    }
  } catch (error) {
    console.error('Error fetching doctor info:', error);
    res.status(500).json({ message: 'Failed to fetch doctor info', error });
  }
});

app.post("/watermark-image/:doctorEmail/:patientID", async (req, res) => {
  const { doctorEmail, patientID } = req.params;
  const formData = req.body;
  console.log("Form data received:", formData);

  try {
    await watermarkImageWithData(formData);

    await addConsultationToDoctorAndPatient(doctorEmail, patientID, formData);

    res.status(200).send({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error processing form:", error);
    res.status(500).send({ message: "Error processing form", error: error.message });
  }
});

app.get("/extract-image-data", async (req, res) => {
  const { image, id } = req.query;

  try {
    const watermarkedData = await extractWatermarkedData(id, image);
    res.status(200).send({
      message: "Data extracted successfully!",
      data: watermarkedData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Error extracting data",
      error: err.message,
    });
  }
});

app.get("/upcoming-appointments/:email", async (req, res) => {
  const { email } =  req.params
  try {
    const upcomingAppointments = await getUpcomingAppointments(email);
    res.status(200).send({
      message: "Appointments fetched successfully!",
      data: upcomingAppointments,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/consultation-logs/:email", async (req, res) => {
  const { email } =  req.params
  try {
    const consultationsLog = await getConsultationsLog(email);
    res.status(200).send({
      message: "Appointments fetched successfully!",
      data: consultationsLog,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/patients/:email", async (req, res) => {
  const { email } =  req.params
  try {
    const patients = await getAllPatients(email);
    res.status(200).send({
      message: "Patients fetched successfully!",
      data: patients,
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
    console.log("transcript --> ", transcript);
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

app.get('/appointments/:email/:patientID', async (req, res) => {
  const { email, patientID } = req.params;
  try {
    const appointments = await getPatientAppointments(email, patientID);
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
});

app.get('/patients/:patientId/radiological-images', async (req, res) => {
  const { patientId } = req.params;
  try {
    const images = await getPatientRadiologicalImages(patientId);
    console.log("Images:", images);
    res.status(200).json(images);
  } catch (error) {
    console.error('Failed to fetch radiological images:', error);
    res.status(500).json({ message: 'Failed to fetch radiological images', error });
  }
});

app.get("/cosultationResult", async (req, res) => {
  try {
    console.log("docID from cosultationResult --> ", globalDocID);

    const data = await getSummary(globalDocID);

    res.status(200).send({
      message: "Successfully!",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
});

export default app;
