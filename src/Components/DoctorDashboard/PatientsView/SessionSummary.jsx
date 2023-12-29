import { Button, Tabs, Text, Textarea, rem } from '@mantine/core';
import { IconNotes, IconPlayerRecord, IconSettingsAutomation, IconTextCaption, } from '@tabler/icons-react';

function SessionSummary() {
	const iconStyle = { width: rem(12), height: rem(12) };

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
				/>
			</Tabs.Panel>

			<Tabs.Panel value="transcriptSummary">
				<Text mt={10}>
					Start recording session to have an automatic summary of the
					conversation
				</Text>
			</Tabs.Panel>

			<Tabs.Panel value="transcript">
				<Button mt={10} color="red" leftSection={<IconPlayerRecord />}>
					Start recording
				</Button>
			</Tabs.Panel>
		</Tabs>
	);
}

export default SessionSummary