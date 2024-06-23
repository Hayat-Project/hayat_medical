import { db } from "../firebase.js";
import { collection, addDoc, getDoc, doc, getDocs } from "firebase/firestore";

const consultationRef = collection(db, "Consultation");
const doctorsRef = collection(db, "doctors");

export const setTranscript = async (transcript, summary) => {
  try {
    const docRef = await addDoc(consultationRef, {
      transcript: transcript,
      summary: summary,
    });
    return docRef.id;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getSummary = async (documentId) => {
  try {
    const docRef = doc(consultationRef, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const summaryData = docSnap.data();
      const summary = summaryData.summary;
      return summary;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUpcomingAppointments = async () => {
  const appointmentsRef = collection(db, "doctors/9a6RcpIOr85C5sHangvM/upcoming_appointments");

  try {
    const querySnapshot = await getDocs(appointmentsRef);
    let appointments = [];
    querySnapshot.forEach((doc) => {
      appointments.push({ id: doc.id, ...doc.data() });
    });
    return appointments;
  } catch (error) {
    console.error("Error fetching upcoming appointments: ", error);
    throw new Error('Failed to fetch appointments');
  }
}

export const getPatients = async () => {
  const patientsCol = collection(db, "doctors/9a6RcpIOr85C5sHangvM/patients");

  try {
    const querySnapshot = await getDocs(patientsCol);
    let patients = [];
    querySnapshot.forEach((doc) => {
      patients.push({ id: doc.id, ...doc.data() });
    });
    return patients;
  } catch (error) {
    console.error("Error fetching patients: ", error);
    throw new Error('Failed to fetch patients');
  }
}


export const getConsultationsLog = async () => {
  const consultationsLogRef = collection(db, "doctors/9a6RcpIOr85C5sHangvM/consultations_log");

  try {
    const querySnapshot = await getDocs(consultationsLogRef);
    let consultations = [];
    querySnapshot.forEach((doc) => {
      consultations.push({ id: doc.id, ...doc.data() });
    });
    return consultations;
  } catch (error) {
    console.error("Error fetching consultations log: ", error);
    throw new Error('Failed to fetch consultations log');
  }
}
