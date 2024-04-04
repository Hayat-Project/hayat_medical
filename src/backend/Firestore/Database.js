import { db } from "../../Config/firebase.js";
import { getDocs, collection, addDoc } from "firebase/firestore";

const consultationRef = collection(db, "Consultation");

export const getTranscript = async () => {
  try {
    const data = await getDocs(consultationRef);
    return data.docs.map((doc) => ({
      ...doc.data(),
    }));
    // console.log("-> ", filteredData)
  } catch (err) {
    console.log(err);
  }
};

export const setTranscript = async (transcript) => {
  try {
    await addDoc(consultationRef, {
      data: transcript,
    });
  } catch (err) {
    console.error(err);
  }
};
