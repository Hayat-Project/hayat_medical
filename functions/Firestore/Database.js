import { db } from "../firebase.js";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";

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