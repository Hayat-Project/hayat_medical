import { useRef, useEffect } from "react";
import { Group, Grid, Divider, ActionIcon, Space } from "@mantine/core";
import { IconPlayerRecord, IconPlayerPause } from "@tabler/icons-react";
import UploadAudio from "./UploadAudio";

function RecordingSession({ setAudioAvailable }) {
  const rec = useRef(null);
  const audioChunks = useRef([]);
  const recordedAudio = useRef(null);

  function recordSession(event) {
    if (rec.current) {
      rec.current.start();
    }
  }

  function stopRecording(event) {
    if (rec.current) {
      rec.current.stop();
    }
  }

  function handlerFunction(stream) {
    rec.current = new MediaRecorder(stream);
    rec.current.ondataavailable = async (e) => {
      audioChunks.current.push(e.data);
      if (rec.current.state === "inactive") {
        let blob = new Blob(audioChunks.current, { type: "audio/mpeg-3" });
        recordedAudio.current.src = URL.createObjectURL(blob);
        console.log();
        recordedAudio.current.controls = true;
        await diarization(blob);
        setAudioAvailable(true); // Set audio available when recording is done
      }
    };
  }

  const diarization = async (blob) => {
    try {
      const audioUrl = URL.createObjectURL(blob);
      console.log(audioUrl);

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
        console.log("OK");
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (err) {
      console.log(err);
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
          <Space h="md" />
          <Divider
            my="xs"
            label="OR"
            labelPosition="center"
            orientation="vertical"
          />
          <Space h="md" />
          <Group justify="center">
            <UploadAudio />
          </Group>
        </Grid.Col>
        <Grid.Col span={3}></Grid.Col>
      </Grid>
      <br />
      <audio ref={recordedAudio} />
    </>
  );
}

export default RecordingSession;
