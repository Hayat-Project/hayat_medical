import React from 'react';
import { Card, Text, Button, Group, Grid, Avatar, Stack } from '@mantine/core';
import patientsData from '../../mockdata/patientsData.json';

function PatientsGallery(props) {
	const searchWord = props.searchWord;
	return (
		<Grid grow>
			{patientsData
				.filter((item) => {
					return searchWord.toLowerCase() === ""
						? item
						: item.name.toLowerCase().includes(searchWord);
				})
				.map((patient, index) => (
					<Grid.Col key={index} span={3}>
						<Card shadow="sm" padding="lg" radius="md" withBorder>
							<Group justify="center">
								<Card.Section>
									<Avatar size={70} src={patient.src} />
								</Card.Section>
							</Group>
							<Group justify="center" mt="md" mb="xs">
								<Text size="lg">{patient.name}</Text>
							</Group>
							<Group mt="md" mb="xs">
								<Stack align="flex-start" justify="flex-start" gap="xs">
									<Text size="sm">
										<b>ID</b>: {patient.id}
									</Text>
									<Text size="sm">
										<b>DOB</b>: {patient.dob}
									</Text>
									<Text size="sm">
										<b>Age</b>: {patient.age}
									</Text>
									<Text size="sm">
										<b>Gender</b>: {patient.gender}
									</Text>
									<Text size="sm">
										<b>Nationality</b>: {patient.nationality}
									</Text>
								</Stack>
							</Group>
							<Button variant="light" color="blue" fullWidth mt="md" radius="md">
								View Patient
							</Button>
						</Card>
					</Grid.Col>
				))}
		</Grid>
	);
}

export default PatientsGallery;
