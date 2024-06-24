import { uploadAudio } from "../../../../../functions/Storage/Storage.js";
import { IconUpload } from "@tabler/icons-react";
import { useState } from "react";
import { Button, FileInput, Stack } from "@mantine/core";

function UploadAudio() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const audioUrl = await uploadAudio(file);
      diarization(audioUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const diarization = async (audioUrl) => {
    try {
      const response = await fetch("https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/diarization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: audioUrl,
        }),
      });

      if (response.ok) {
        console.log("OK");
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Stack>
        <FileInput
          w={450}
          placeholder="Input placeholder"
          accept="audio/mp3, audio/wav"
          value={file}
          onChange={setFile}
        />
        <Button
          mt={10}
          color="blue"
          leftSection={<IconUpload />}
          onClick={upload}
        >
          Upload Audio
        </Button>
      </Stack>
    </>
  );
}

export default UploadAudio;
