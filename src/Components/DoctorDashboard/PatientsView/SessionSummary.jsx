import { Button, Tabs, Text, Textarea, rem } from '@mantine/core';
import { IconNotes, IconPlayerRecord, IconSettingsAutomation, IconTextCaption, } from '@tabler/icons-react';
import OpenAI from "openai";
import { useState } from 'react';

function SessionSummary({ onDoctorNoteChange, transcript }) {
	const iconStyle = { width: rem(12), height: rem(12) };

	const handleDoctorNoteChange = (event) => {
		onDoctorNoteChange(event.target.value);
	};

	const openai = new OpenAI({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true
	});

	let [summary, setSummary] = useState("");

	async function summarize(transcript) {
		const prompt = "Summarize the following consultation between the doctor and patient:\n" + transcript
		const completion = await openai.chat.completions.create({
			messages: [{ role: "system", content: prompt }],
			model: "gpt-3.5-turbo"
		});

		console.log(completion.choices[0].message.content);
		setSummary(completion.choices[0].message.content);
	}


	return (
		<Tabs radius="md" defaultValue="doctor">
			<Tabs.List>
				<Tabs.Tab value="doctor" leftSection={<IconNotes style={iconStyle} />}>
					Doctor Notes
				</Tabs.Tab>
				<Tabs.Tab
					value="transcriptSummary"
					leftSection={<IconSettingsAutomation style={iconStyle} />}
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
				<Button mt={10} color="red" leftSection={<IconPlayerRecord />} onClick={summarize}>
					Generate Summary
				</Button>
				<Text>
					{summary}
				</Text>
			</Tabs.Panel>

			<Tabs.Panel value="transcript">
				<Button mt={10} color="red" leftSection={<IconPlayerRecord />}>
					Start recording
				</Button>
				<Text>
					{transcript}
				</Text>
			</Tabs.Panel>
		</Tabs>
	);
}

export default SessionSummary