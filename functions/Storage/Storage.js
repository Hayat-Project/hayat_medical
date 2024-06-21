const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../firebase.js");
const { v4 } = require("uuid");

exports.uploadAudio = async (audioUpload) => {
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