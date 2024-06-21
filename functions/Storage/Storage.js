import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";
import { v4 } from "uuid";

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