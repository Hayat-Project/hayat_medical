import { Grid, Card, Flex, Title, TextInput, Checkbox, Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import MainHeader from '../MainHeader';

function Appointments() {
	return (
	<>
		<Flex direction="column" mb={20}>
			<MainHeader header="Appointments" subheader="View Your Schedule!" badge='false'/>
		</Flex>
		<Grid grow>
			<Grid.Col span={8}>
				<Card shadow="sm" padding="lg" radius="md" withBorder h={715}>
				</Card>
			</Grid.Col>
			<Grid.Col span={4}>
				<Grid>
					<Grid.Col>
						<Card shadow="sm" padding="lg" radius="md" withBorder>
							<Group justify='center'>
								<Calendar size='xl' />
							</Group>
						</Card>
					</Grid.Col>
					<Grid.Col>
						<Card shadow="sm" padding="lg" radius="md" withBorder>
							<Title order={5} ta="center">Tasks</Title>
							<TextInput mt={10}
								placeholder="Type a task"
							/>
							<Checkbox
								mt={20}
								label="This is a task"
							/>
							<Checkbox
								mt={20}
								label="This is a task"
							/>
							<Checkbox
								mt={20}
								label="This is a task"
							/>
							<Checkbox
								mt={20}
								label="This is a task"
							/>
						</Card>
					</Grid.Col>
				</Grid>
			</Grid.Col>
		</Grid>
		</>
	);

}

export default Appointments;