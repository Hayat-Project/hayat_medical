import { Grid, Card, Text, Title, TextInput, Checkbox } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Appointments() {
	return (
		<Grid>
			<Grid.Col span={8}>
				<Card shadow="sm" padding="lg" radius="md" withBorder h={1000}>

				</Card>
			</Grid.Col>
			<Grid.Col span={4}>
				<Grid>
					<Grid.Col>
						<Card shadow="sm" padding="lg" radius="md" withBorder>
							<Calendar size='xl' />
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
	);

}

export default Appointments;