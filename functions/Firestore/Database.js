import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { db, storage } from "../firebase.js";
import { collection, addDoc, getDoc, doc, getDocs } from "firebase/firestore";

const consultationRef = collection(db, "Consultation");

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
  const appointmentsRef = collection(db, "doctors/BM29ZZDvKl2boKplfTCS/upcoming_appointments");

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

export const getPatientRadiologicalImages = async (patientId) => {
  const storageRef = ref(storage, `Radiological Image/${patientId}`);
  const listResult = await listAll(storageRef);
  const images = await Promise.all(listResult.items.map(async (item) => {
    const imageUrl = await getDownloadURL(item);
    const metadata = await getMetadata(item);
    const creationTime = new Date(metadata.timeCreated).toLocaleDateString(); 
    return {
      id: item.name,
      reportName: item.name,
      imageUrl: imageUrl,
      date: creationTime, 
    };
  }));
  return images;
};

export const getAllPatients = async () => {
  const patientsCol = collection(db, "doctors/BM29ZZDvKl2boKplfTCS/patients");

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
  const consultationsLogRef = collection(db, "doctors/BM29ZZDvKl2boKplfTCS/consultations_log");

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
