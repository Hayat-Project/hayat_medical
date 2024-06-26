import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";
import { v4 } from "uuid";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.js";
import patientsData from "../../src/mockdata/patientsData.json" assert { type: "json" };
import doctorsData from "../../src/mockdata/doctorsData.json" assert { type: "json" };
import { getLocalISOString } from "../utility.js";

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

export const populateFirestoreWithDoctors = async () => {
  try {
    const doctorsCollectionRef = collection(db, "doctors");
    for (const doctor of doctorsData) {
      const {
        id,
        name,
        department,
        overallRating,
        totalPoints,
        email,
        profilePicture,
        phone
      } = doctor;

      const docRef = doc(doctorsCollectionRef, email);
      await setDoc(docRef, {
        id,
        name,
        department,
        overallRating,
        totalPoints,
        email,
        profilePicture,
        phone  
      });

      const patientsCollectionRef = collection(db, `doctors/${docRef.id}/patients`);
      for (const patient of patientsData) {
        const { name, id, dob, age, gender, email, nationality, phone, insurance, lastAppointment, allergies, nationalid, src: profilePicture } = patient;
        const patientDocRef = doc(patientsCollectionRef, id.toString());
        await setDoc(patientDocRef, {
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

        const screeningsCollectionRef = collection(db, `doctors/${docRef.id}/patients/${patientDocRef.id}/screenings`);
        const appointmentsCollectionRef = collection(db, `doctors/${docRef.id}/patients/${patientDocRef.id}/appointments`);

        await addDoc(appointmentsCollectionRef, {
          date: getLocalISOString().slice(0, 10),
          treatmentType: "General Checkup",
          bookingTime: getLocalISOString().slice(11, 16),
          comments: "Initial consultation",
          status: "Completed",
          imageFileName: "Brain"
        });
  
        await addDoc(screeningsCollectionRef, {
          date: getLocalISOString().slice(0, 10),
          id: generateSixDigitId(),
          imageRef: "path/to/screening/image.jpg"
        });
      }

      const upcomingAppointmentsRef = collection(db, `doctors/${docRef.id}/upcoming_appointments`);
      const ratingsCollectionRef = collection(db, `doctors/${docRef.id}/ratings`);
      
      const consultationsLogRef = collection(db, `doctors/${docRef.id}/consultations_log`);
      await addDoc(consultationsLogRef, {
        patientName: "John Doe",
        treatmentType: "Consultation",
        date: getLocalISOString().slice(0, 10),
        startingTime: "11:30",
        endTime: getLocalISOString().slice(11, 16),
        status: "Completed",
        comments: "Follow-up required",
        prescription: "Antibiotics",
        imageFileName: "Brain"
      });

      await addDoc(upcomingAppointmentsRef, {
        patientName: "Chloe Davis",
        date: getLocalISOString().slice(0, 10),
        startingTime: "09:00",
        endTime: "09:15",
        status: "Scheduled",
      });

      await addDoc(ratingsCollectionRef, {
        date: getLocalISOString(),
        rating: 4.5,
        feedback: "Great doctor, very knowledgeable.",
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
