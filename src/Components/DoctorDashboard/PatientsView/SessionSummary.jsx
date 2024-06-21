import {
  Button,
  Tabs,
  Textarea,
  rem,
  Loader,
  Center,
} from "@mantine/core";
import {
  IconNotes,
  IconPlayerRecord,
  IconPlayerStop,
  IconSettingsAutomation,
  IconTextCaption,
} from "@tabler/icons-react";

import { useState, useEffect, useRef } from "react";
import { uploadAudio } from "../../../../functions/Storage/Storage";

function SessionSummary({ onDoctorNoteChange, onSessionSummary }) {
  const [transcript, setTranscript] = useState("");
  const iconStyle = { width: rem(12), height: rem(12) };
  let rec = null;
  let audioChunks = [];
  let recordedAudio = useRef(null);

  const handleDoctorNoteChange = (event) => {
    onDoctorNoteChange(event.target.value);
  };

  const handleSessionSummary = () => {
    onSessionSummary(transcript);
  };

  function recordSession(event) {
    rec.start();
  }

  function stopRecording(event) {
    rec.stop();
  }

  const upload = async () => {
    try {
      const url = await uploadAudio(audioUpload);
      diarization(url);
    } catch (err) {
      console.log(err);
    }
  };
  
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

  const diarization = async (blob) => {
    try {
      const audioUrl = await uploadAudio(blob);

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

  const consultationResult = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/cosultationResult", {
        method: "GET",
      });
      if (response.ok) {
        let responseBody = await response.json();
        setTranscript(responseBody.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => { handlerFunction(stream) });
  }, []);

  return (
    <Tabs radius="md" defaultValue="doctor">
      <Tabs.List>
        <Tabs.Tab value="doctor" leftSection={<IconNotes style={iconStyle} />}>
          Doctor Notes
        </Tabs.Tab>
        <Tabs.Tab
          value="transcriptSummary"
          leftSection={<IconSettingsAutomation style={iconStyle} />}
          onClick={consultationResult}
        >
          Transcript Summary
        </Tabs.Tab>
        <Tabs.Tab
          value="transcript"
          leftSection={<IconTextCaption style={iconStyle} />}
        >
          Transcript
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="doctor">
        <Textarea
          mt={10}
          placeholder="Enter consultation notes"
          autosize
          radius="md"
          minRows={8}
          maxRows={8}
          onChange={handleDoctorNoteChange}
        />
      </Tabs.Panel>

      <Tabs.Panel value="transcriptSummary">
        {transcript == "" ? (
          <Center h={100}>
            <Loader color="blue" />
          </Center>
        ) : (
          <>
            <Textarea
              mt={10}
              autosize
              radius="md"
              minRows={8}
              maxRows={8}
              value={transcript}
            />
            <Button
              mt={10}
              color="blue"
              leftSection={<IconPlayerRecord />}
              onClick={handleSessionSummary}
            >
              Apply
            </Button>
          </>
        )}
      </Tabs.Panel>

      <Tabs.Panel value="transcript">
        <Button
          mt={10}
          mr={10}
          color="blue"
          leftSection={<IconPlayerRecord />}
          onClick={recordSession}
        >
          Record Session
        </Button>
        <Button
          mt={10}
          mb={10}
          color="red"
          leftSection={<IconPlayerStop />}
          onClick={stopRecording}
        >
          Stop Recording
        </Button>
        <br />
        <audio ref={recordedAudio} />
      </Tabs.Panel>
    </Tabs>
  );
}

export default SessionSummary;