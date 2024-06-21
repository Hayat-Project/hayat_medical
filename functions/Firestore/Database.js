const { db } = require("../firebase.js");
const { collection, addDoc, getDoc, doc } = require("firebase/firestore");

const consultationRef = collection(db, "Consultation");

exports.setTranscript = async (transcript, summary) => {
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

exports.getSummary = async (documentId) => {
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