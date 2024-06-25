import { uploadAudio } from "../../../../../functions/Storage/Storage.js";
import {
  IconUpload,
  IconCircleCheck,
  IconExclamationCircle,
} from "@tabler/icons-react"; // Import icons for feedback
import { useState } from "react";
import { Button, FileInput, Stack, Loader, Text, Group } from "@mantine/core"; // Assuming Mantine has Text component

function UploadAudio() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [diarizationStatus, setDiarizationStatus] = useState(null); // State to manage diarization status

  const upload = async () => {
    setLoading(true); // Set loading to true when upload starts
    try {
      const audioUrl = await uploadAudio(file);
      await diarization(audioUrl);
      setDiarizationStatus(true); // Set diarization status to true (success)
    } catch (err) {
      console.log(err);
      setDiarizationStatus(false); // Set diarization status to false (error)
    } finally {
      setLoading(false); // Set loading to false when upload completes (or errors out)
    }
  };

  const diarization = async (audioUrl) => {
    try {
      const response = await fetch(
        "https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/diarization",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: audioUrl,
          }),
        }
      );

      if (response.ok) {
        console.log("Diarization OK");
      } else {
        console.error("Error during diarization:", response.statusText);
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
          placeholder="Select audio file"
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
          {loading ? (
            <Loader color="rgba(255, 255, 255, 1)" type="dots" />
          ) : (
            "Upload Audio"
          )}
        </Button>
        {diarizationStatus !== null && (
          <Text mt={2} size="sm" c={diarizationStatus ? "green" : "red"}>
            {diarizationStatus ? (
              <Group>
                <IconCircleCheck />
                <Text size="sm">Audio diarization completed successfully.</Text>
              </Group>
            ) : (
              <Group>
                <IconExclamationCircle />
                <Text size="sm">Error during diarization. Please try</Text>
              </Group>
            )}
          </Text>
        )}
      </Stack>
    </>
  );
}

export default UploadAudio;
