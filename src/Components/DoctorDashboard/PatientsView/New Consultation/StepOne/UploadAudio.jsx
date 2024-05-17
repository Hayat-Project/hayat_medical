import { uploadAudio } from "../../../../../backend/Storage/Storage.js";
import { IconUpload } from "@tabler/icons-react";
import { useState } from "react";
import { Button, FileInput } from "@mantine/core";

function UploadAudio() {
  const [audioUpload, setAudioUpload] = useState(null);
  const upload = async () => {
    try {
      const url = await uploadAudio(audioUpload);
      diarization(url);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <FileInput
      w={450}
        placeholder="Input placeholder"
        accept="audio/mp3, audio/wav"
        value={audioUpload}
        onChange={setAudioUpload}
      />
      <Button
        mt={10}
        color="blue"
        leftSection={<IconUpload />}
        onClick={upload}
      >
        Upload Audio
      </Button>
    </>
  );
}

export default UploadAudio;
