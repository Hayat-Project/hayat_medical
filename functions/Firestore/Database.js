import {getDownloadURL, getMetadata, listAll, ref} from "firebase/storage";
import {db, storage} from "../firebase.js";
import {addDoc, collection, doc, getDoc, getDocs} from "firebase/firestore";
import { getLocalISOString } from "../utility.js";

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

export const getPatientAppointments = async (email, patientID) => {
  const appointmentsRef = collection(db, `doctors/${email}/patients/${patientID}/appointments`);
  const querySnapshot = await getDocs(appointmentsRef);
  return querySnapshot.docs.map(doc => doc.data());
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

export async function addConsultationToDoctorAndPatient(doctorEmail, patientID, formData) {
  try {
    const doctorRef = doc(db, "doctors", doctorEmail);
    const doctorSnap = await getDoc(doctorRef);
    if (!doctorSnap.exists()) {
      throw new Error("Doctor not found");
    }

    const consultationsLogRef = collection(db, `doctors/${doctorEmail}/consultations_log`);
    await addDoc(consultationsLogRef, {
      patientName: formData.patientID,
      treatmentType: "Consultation",
      date: getLocalISOString().slice(0, 10),
      startingTime: getLocalISOString().slice(11, 16),
      endTime: getLocalISOString().slice(11, 16),
      status: "Upcoming",
      comments: "Follow-up required",
      imageFileName: formData.imageLabel,
    });

    const appointmentsCollectionRef = collection(db, `doctors/${doctorEmail}/patients/${patientID}/appointments`);
    await addDoc(appointmentsCollectionRef, {
      date: getLocalISOString().slice(0, 10),
      treatmentType: "General Checkup",
      bookingTime: getLocalISOString().slice(11, 16),
      comments: "Initial consultation",
      status: "Upcoming",
      imageFileName: formData.imageLabel,
    });
  } catch (error) {
    throw new Error(`Error adding consultation data: ${error.message}`);
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
