import { useState, useRef, useEffect } from "react";
import {
  Button,
  Group,
  Grid,
  Divider,
  ActionIcon,
  FileButton,
  Text,
  Space,
} from "@mantine/core";
import {
  IconPlayerRecord,
  IconPlayerPause,
  IconUpload,
} from "@tabler/icons-react";

function RecordingSession() {
    const [file, setFile] = useState();
    let rec = null;
  let audioChunks = [];

  let recordedAudio = useRef(null);
  function recordSession(event) {
    rec.start();
  }
  function stopRecording(event) {
    rec.stop();
  }

  function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = async e => {
      audioChunks.push(e.data);
      if (rec.state == "inactive") {
        let blob = new Blob(audioChunks, { type: 'audio/mpeg-3' });
        recordedAudio.current.src = URL.createObjectURL(blob);
        recordedAudio.current.controls = true;
        await diarization(blob)
      }
    }
  }
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => { handlerFunction(stream) });
  }, []);
  const upload = async () => {
    try {
      const url = await uploadAudio(audioUpload);
      diarization(url);
    } catch (err) {
      console.log(err);
    }
  };
  const diarization = async (blob) => {
    try {
      const audioUrl = await uploadAudio(blob);
 
      const response = await fetch("http://localhost:3000/diarization", {
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
       <Grid>
        <Grid.Col span={3}></Grid.Col>
        <Grid.Col span={6}>
          {/* <Title order={2}>Record Session</Title> */}
          <Group justify="center" gap="xl" mt={30}>
            <ActionIcon
              variant="light"
              color="red"
              aria-label="Settings"
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
              aria-label="Settings"
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
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => (
                <Button leftSection={<IconUpload />} {...props}>
                  Upload audio
                </Button>
              )}
            </FileButton>
          </Group>

          {file && (
            <Text size="sm" ta="center" mt="sm">
              Picked file: {file.name}
            </Text>
          )}
        </Grid.Col>
        <Grid.Col span={3}></Grid.Col>
      </Grid>
      <br />
        <audio ref={recordedAudio} />
    </>
  );
}

export default RecordingSession;
