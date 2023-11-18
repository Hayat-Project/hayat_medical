import { Card, Title, TextInput, Checkbox } from '@mantine/core';


function Tasks() {
	return (
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
		</Card>);
}

export default Tasks;