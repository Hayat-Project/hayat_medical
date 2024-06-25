import {getDownloadURL, getMetadata, listAll, ref} from "firebase/storage";
import {db, storage} from "../firebase.js";
import {addDoc, collection, doc, getDoc, getDocs} from "firebase/firestore";

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

export async function getPhoneNumber(email) {
  try {
    const docRef = doc(db, "doctors", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data().phone;
    } else {
      console.log("No such document with email:", email);
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
}

export async function getDoctorInfo(email) {
  try {
    const docRef = doc(db, "doctors", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const patientsRef = collection(docRef, "patients");
      const querySnapshot = await getDocs(patientsRef);

      return {
        name: data.name,
        department: data.department,
        overallRating: data.overallRating,
        totalPoints: data.totalPoints,
        profilePicture: data.profilePicture,
        patientCount: querySnapshot.size
      };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting doctor info:", error);
    throw error;
  }
}

export const getSummary = async (documentId) => {
  try {
    const docRef = doc(consultationRef, documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const summaryData = docSnap.data();
      return summaryData.summary;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUpcomingAppointments = async (email) => {
  const appointmentsRef = collection(db, `doctors/${email}/upcoming_appointments`);

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

export const getAllPatients = async (email) => {
  const patientsCol = collection(db, `doctors/${email}/patients`);

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


export const getConsultationsLog = async (email) => {
  const consultationsLogRef = collection(db, `doctors/${email}/consultations_log`);

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
