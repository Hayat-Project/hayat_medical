import { Text, Table, Avatar, Group, Badge } from "@mantine/core";

const elements = [
	{
		key: 0,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 1,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Ahmad",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="teal" size="sm" radius="lg">
				Done
			</Badge>
		),
	},
	{
		key: 2,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Nasser",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 3,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "AHMAD",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="teal" size="sm" radius="lg">
				Done
			</Badge>
		),
	},
	{
		key: 4,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="teal" size="sm" radius="lg">
				Done
			</Badge>
		),
	},
	{
		key: 5,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 6,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 7,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 8,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 9,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 10,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 11,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 12,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 13,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 14,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 15,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 16,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 17,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 18,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 19,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 20,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 21,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 22,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 23,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Ali Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
	{
		key: 24,
		avatar:
			"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
		name: "Olivia Rhye",
		date: "Dec 30 2023",
		stime: "09:42 PM",
		etime: "10:50 PM",
		status: (
			<Badge variant="light" color="red" size="sm" radius="lg">
				Canceled
			</Badge>
		),
	},
];

function ConsultationsLogTable(props) {
	const searchWord = props.searchWord;

	const rows = elements
		.filter((item) => {
			return searchWord.toLowerCase() === ""
				? item
				: item.name.toLowerCase().includes(searchWord);
		})
		.map((row) => (
			<Table.Tr key={row.key}>
				<Table.Td>
					<Group gap="sm">
						<Avatar size={26} src={row.avatar} radius={26} />
						<Text size="sm" fw={500}>
							{row.name}
						</Text>
					</Group>
				</Table.Td>
				<Table.Td>{row.date}</Table.Td>
				<Table.Td>{row.stime}</Table.Td>
				<Table.Td>{row.etime}</Table.Td>
				<Table.Td>{row.status}</Table.Td>
			</Table.Tr>
		));

	return (
		<Table
			verticalSpacing="sm"
			highlightOnHover
			withColumnBorders
			withRowBorders={false}
			striped
		>
			<Table.Thead>
				<Table.Tr>
					<Table.Th>Patient Name</Table.Th>
					<Table.Th>Date</Table.Th>
					<Table.Th>Starting Time</Table.Th>
					<Table.Th>End Time</Table.Th>
					<Table.Th>Status</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>{rows}</Table.Tbody>
		</Table>
	);
}

export default ConsultationsLogTable;
