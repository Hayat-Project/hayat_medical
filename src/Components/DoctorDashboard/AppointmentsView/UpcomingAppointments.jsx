import { Text, Table, Avatar, Group, Badge, ActionIcon, ScrollArea, Loader } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import InfoIconWithProps from "../../InfoIconWithProps";

function UpcomingAppointments(props) {
	const [sort, setSort] = useState("");
	const [defaultSort, setDefaultSort] = useState("");
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState([]);

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

	useEffect(() => {
        const fetchAppointments = async () => {
			console.log("fetching appointments client side");
            try {
                const response = await fetch('https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/upcoming-appointments');
                const data = await response.json();
				console.log("Client reached data: " + data);
                setAppointments(data.data); 
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch upcoming appointments:", error);
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

	function sortName() {
		setDefaultSort(true);
		sort ? setSort(false) : setSort(true);
	}

	
    const rows = appointments
        .sort(sortByName)
        .map((row) => (
            <Table.Tr key={row.key}>
                <Table.Td>
                    <Group gap="sm">
                        <Avatar size={26} src={row.avatar} radius={26} />
                        <Text size="sm" fw={500}>
                            {row.patientName}
                        </Text>
                    </Group>
                </Table.Td>
                <Table.Td>{row.date}</Table.Td>
                <Table.Td>{row.startingTime}</Table.Td>
                <Table.Td>{row.endTime}</Table.Td>
                <Table.Td>
                    <Badge
                        variant="light"
                        color={row.status === "Confirmed" ? "green" : (row.status === "Waiting" ? "red" : "blue")}
                        size="sm"
                        radius="lg"
                    >
                        {row.status}
                    </Badge>
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
                                        { name: 'Scheduled', color: 'blue', description: 'Patient not arrived yet' },
                                        { name: 'Confirmed', color: 'green', description: 'Patient confirmed appointment' },
                                    ]}
                                    width={322}
                                />
                            </Group>
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {loading ? <Loader size="lg" color="blue" /> : rows}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}
export default UpcomingAppointments;