import {
  Button,
  Tabs,
  Textarea,
  rem,
  FileInput,
  Loader,
  Center,
} from "@mantine/core";
import {
  IconNotes,
  IconPlayerRecord,
  IconSettingsAutomation,
  IconTextCaption,
  IconUpload,
} from "@tabler/icons-react";
import { useState } from "react";
import { uploadAudio } from "../../../backend/Storage/Storage.js";
import OpenAI from "openai";
import env from "../../../../env.js"

function SessionSummary({ onDoctorNoteChange, onSessionSummary }) {
  const [audioUpload, setAudioUpload] = useState(null);
  const [transcript, setTranscript] = useState("");
  const iconStyle = { width: rem(12), height: rem(12) };

  const handleDoctorNoteChange = (event) => {
    onDoctorNoteChange(event.target.value);
  };

  const handleSessionSummary = () => {
    onSessionSummary(transcript);
  };

	const openai = new OpenAI({
		apiKey: env.REACT_APP_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true
	});


	async function summarize(transcript) {
		const prompt = "Summarize the following consultation between the doctor and patient:\n" + transcript
		const completion = await openai.chat.completions.create({
			messages: [{ role: "system", content: prompt }],
			model: "gpt-3.5-turbo"
		});

		console.log(completion.choices[0].message.content);
    setTranscript(completion.choices[0].message.content);
	}

  const upload = async () => {
    try {
      const url = await uploadAudio(audioUpload);
      diarization(url);
    } catch (err) {
      console.log(err);
    }
  };

  const diarization = async (url) => {
    try {
      const response = await fetch("http://localhost:3000/diarization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transcript: url,
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
      const response = await fetch("http://localhost:3000/cosultationResult", {
        method: "GET",
      });
      if (response.ok) {
        let responseBody = await response.json(); // object
        summarize(responseBody.data[0].data);
      }
    } catch (err) {
      console.log(err);
    }
  };
	
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
        <FileInput
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
          Upload Aduio
        </Button>
      </Tabs.Panel>
    </Tabs>
  );
  
}

export default SessionSummary;
