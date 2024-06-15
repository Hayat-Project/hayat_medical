import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../Config/firebase.js";
import { v4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/firebase.js";
import patientsData from "../../mockdata/patientsData.json" assert { type: "json" };
import doctorsData from "../../mockdata/doctorsData.json" assert { type: "json" };

export const uploadAudio = async (audioUpload) => {
  try {
    if (audioUpload == null) return;
    
    const audioRef = ref(
      storage,
      `Consultation Audio/${audioUpload.name + v4()}`
    );

    const upload = await uploadBytes(audioRef, audioUpload);
    return await getDownloadURL(upload.ref);
  } catch (err) {
    console.log(err);
  }
};

export const populateFirestoreWithPatients = async () => {
  try {
    const patientDocRef = collection(db, "patients");
    for (const patient of patientsData) {
      const { name, id, dob, age, gender, email, nationality, phone, insurance, lastAppointment, allergies, nationalid, src: profilePicture } = patient;
      const docRef = await addDoc(patientDocRef, {
        name,
        id,
        dob,
        age,
        gender,
        email,
        nationality,
        phone,
        insurance,
        lastAppointment,
        allergies,
        nationalid,
        profilePicture
      });

      const screeningsCollectionRef = collection(db, `patients/${docRef.id}/screenings`);
      const reportsCollectionRef = collection(db, `patients/${docRef.id}/reports`);
      const appointmentsCollectionRef = collection(db, `patients/${docRef.id}/appointments`);

      await addDoc(appointmentsCollectionRef, {
        date: new Date().toISOString(),
        treatmentType: "General Checkup",
        bookingTime: new Date().toISOString(),
        comments: "Initial consultation",
        status: "Scheduled",
        transcript: "Patient discusses symptoms.",
        transcriptSummary: "Discussion about general health.",
        doctorNotes: "Recommend blood tests.",
        prescription: "Vitamin D supplements",
        recordingMp3Reference: "path/to/recording.mp3",
        imageReference: "path/to/image.jpg"
      });

      await addDoc(screeningsCollectionRef, {
        date: new Date().toISOString(),
        id: generateSixDigitId(),
        imageRef: "path/to/screening/image.jpg"
      });

      await addDoc(reportsCollectionRef, {
        id: generateSixDigitId(),
        date: new Date().toISOString(),
        documentRef: `path/to/report/${patient.id}.pdf`
      });
    }
    console.log("Patients successfully added to Firestore.");
  } catch (err) {
    console.error("Error adding patients to Firestore: ", err);
  }
};

export const populateFirestoreWithDoctors = async () => {
  try {
    const doctorsCollectionRef = collection(db, "doctors");
    for (const doctor of doctorsData) {
      const { id, name, department, overallRating, totalPoints, email, password, profilePicture } = doctor;
      const docRef = await addDoc(doctorsCollectionRef, {
        id,
        name,
        department,
        overallRating,
        totalPoints,
        email,
        password,
        profilePicture
      });

      const appointmentsCollectionRef = collection(db, `doctors/${docRef.id}/appointments`);
      const ratingsCollectionRef = collection(db, `doctors/${docRef.id}/ratings`);

      await addDoc(appointmentsCollectionRef, {
        date: new Date().toISOString(),
        patientName: "John Doe",
        treatmentType: "Consultation",
        status: "Completed",
        comments: "Follow-up required",
        prescription: "Antibiotics",
        recordingMp3Reference: "path/to/recording.mp3",
        imageReference: "path/to/image.jpg"
      });

      await addDoc(ratingsCollectionRef, {
        date: new Date().toISOString(),
        rating: 4.5,
        feedback: "Great doctor, very knowledgeable."
      });
    }
    console.log("Doctors successfully added to Firestore.");
  } catch (err) {
    console.error("Error adding doctors to Firestore: ", err);
  }
};

const generateSixDigitId = () => {
  return Math.floor(Math.random() * 900000) + 100000;
};
