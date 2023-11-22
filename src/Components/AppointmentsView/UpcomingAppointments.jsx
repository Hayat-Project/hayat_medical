import { Text, Table, Avatar, Group, Badge, ActionIcon, ScrollArea } from "@mantine/core";
import { IconArrowsSort, IconInfoCircle } from "@tabler/icons-react";
import { useState } from "react";
import elements from "../../mockdata/upcomingAppointments.json";
import { useMediaQuery } from "@mantine/hooks";
import InfoIconWithProps from "../InfoIconWithProps";

function UpcomingAppointments(props) {
	const searchWord = props.searchWord;
	const [sort, setSort] = useState("");
	const [defaultSort, setDefaultSort] = useState("");

	function sortByName(a, b) {
		return defaultSort
			? sort
				? a.name > b.name
					? 1
					: -1
				: a.name < b.name
					? 1
					: -1
			: null;
	}

	function sortName() {
		setDefaultSort(true);
		sort ? setSort(false) : setSort(true);
	}

	const rows = elements
		.sort(sortByName)
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
				<Table.Td>
					{
						<Badge
							variant="light"
							color={row.status === "Confirmed" ? "green" : "red" | row.status === "Waiting" ? "red" : "blue"}
							size="sm"
							radius="lg"
						>
							{row.status}
						</Badge>
					}
				</Table.Td>
			</Table.Tr>
		));

	return (
		<ScrollArea style={{ height: "100%", width: "100%" }}>
			<Table
				verticalSpacing="sm"
				highlightOnHover
				withColumnBorders
				withRowBorders={false}
				striped
				style={{ overflowY: "auto" }}
			>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>
							Patient Name{" "}
							<ActionIcon
								variant="transparent"
								onClick={sortName}
							>
								<IconArrowsSort
									style={{ width: "70%", height: "70%" }}
									stroke={1.5}
								/>
							</ActionIcon>
						</Table.Th>
						<Table.Th>Date</Table.Th>
						<Table.Th>Starting Time</Table.Th>
						<Table.Th>End Time</Table.Th>
						<Table.Th>
							<Group gap={5}>Status
								<InfoIconWithProps
									badges={[
										{ name: 'Waiting', color: 'red', description: 'Patient is outside and waiting' },
										{ name: 'Scheduled', color: 'blue', description: 'Patient not arived yet' },
										{ name: 'Confirmed', color: 'green', description: 'Patient confirmed appointment' },
									]}
									width={322}
								/>
							</Group>
						</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{rows}
				</Table.Tbody>
			</Table>
		</ScrollArea>

	);
}

export default UpcomingAppointments;