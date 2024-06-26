import { useRef, useEffect, useState } from "react";
import {
  Group,
  Grid,
  Divider,
  ActionIcon,
  Space,
  Loader,
  Text,
  Center,
} from "@mantine/core";
import {
  IconPlayerRecord,
  IconPlayerPause,
  IconCircleCheck,
  IconExclamationCircle,
} from "@tabler/icons-react";
import UploadAudio from "./UploadAudio";
import { uploadAudio } from "../../../../../functions/Storage/Storage.js";

function RecordingSession() {
  const rec = useRef(null);
  const audioChunks = useRef([]);
  const recordedAudio = useRef(null);
  const [recordingFeedback, setRecordingFeedback] = useState("");
  const [diarizationFeedback, setDiarizationFeedback] = useState("");
  const [loadingDiarization, setLoadingDiarization] = useState(false);

  function recordSession(event) {
    if (rec.current) {
      rec.current.start();
      setRecordingFeedback("Recording started");
    }
  }

  function stopRecording(event) {
    if (rec.current) {
      rec.current.stop();
      setRecordingFeedback("Recording stopped");
    }
  }

  function handlerFunction(stream) {
    rec.current = new MediaRecorder(stream);
    rec.current.ondataavailable = async (e) => {
      audioChunks.current.push(e.data);
      if (rec.current.state === "inactive") {
        let blob = new Blob(audioChunks.current, { type: "audio/mpeg" });
        recordedAudio.current.src = URL.createObjectURL(blob);
        recordedAudio.current.controls = true;
        setLoadingDiarization(true);
        try {
          const audioUrl = await uploadAudio(blob);
          await diarization(audioUrl);
        } catch (err) {
          console.error("Error during upload and diarization:", err);
          setDiarizationFeedback("Error during diarization. Please try again.");
        } finally {
          setLoadingDiarization(false);
        }
      }
    };
  }

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
        setDiarizationFeedback("Diarization completed successfully");
        console.log("Diarization OK");
      } else {
        setDiarizationFeedback("Error during diarization. Please try again.");
        console.error("Error during diarization:", response.statusText);
      }
    } catch (err) {
      setDiarizationFeedback("Error during diarization. Please try again.");
      console.error("Error during diarization:", err);
    }
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      handlerFunction(stream);
    });
  }, []);

  return (
    <>
      <Grid>
        <Grid.Col span={3}></Grid.Col>
        <Grid.Col span={6}>
          <Group justify="center" gap="xl" mt={30}>
            <ActionIcon
              variant="light"
              color="red"
              aria-label="Record"
              size={50}
              radius="md"
              onClick={recordSession}
            >
              <IconPlayerRecord
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon
              variant="light"
              aria-label="Pause"
              size={50}
              radius="md"
              onClick={stopRecording}
            >
              <IconPlayerPause
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
          {recordingFeedback && (
            <Text
              mt={2}
              size="sm"
              c={recordingFeedback.includes("stopped") ? "blue" : "red"}
            >
              {recordingFeedback}
            </Text>
          )}
          <Space h="md" />
          <Divider
            my="xs"
            label="OR"
            labelPosition="center"
            orientation="vertical"
          />
          <Space h="md" />
          <Group justify="center">
            <UploadAudio
              setDiarizationFeedback={setDiarizationFeedback}
              setLoadingDiarization={setLoadingDiarization}
            />
          </Group>
          {loadingDiarization && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Loader type="dots" />
            </div>
          )}
          {diarizationFeedback && (
            <Text
              mt={2}
              size="sm"
              c={diarizationFeedback.includes("completed") ? "green" : "red"}
            >
              {diarizationFeedback.includes("completed") ? (
                <Group justify="center">
                  <IconCircleCheck />
                  <Text size="sm">
                    Audio diarization completed successfully.
                  </Text>
                </Group>
              ) : (
                <Group justify="center">
                  <IconExclamationCircle />
                  <Text size="sm">
                    Error during diarization. Please try again.
                  </Text>
                </Group>
              )}
            </Text>
          )}
        </Grid.Col>
        <Grid.Col span={3}></Grid.Col>
      </Grid>
      <br/>
      <Center>
        <audio ref={recordedAudio} />
      </Center>
    </>
  );
}

export default RecordingSession;
