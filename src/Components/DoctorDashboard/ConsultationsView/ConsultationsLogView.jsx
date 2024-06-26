import {Text, Table, Avatar, Group, Badge, ActionIcon, ScrollArea, Loader} from "@mantine/core";
import InfoIconWithProps from "../../InfoIconWithProps";
import {IconArrowsSort} from "@tabler/icons-react";
import {useState, useEffect} from "react";
import Cookies from "js-cookie";

function ConsultationsLogView(props) {
    const [consultations, setConsultations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState("");
    const [defaultSort, setDefaultSort] = useState("");

    useEffect(() => {
        const fetchConsultations = async () => {
            try {
                const response = await fetch(`https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/consultation-logs/${Cookies.get("email")}`);
                const data = await response.json();
                setConsultations(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch consultations:", error);
                setLoading(false);
            }
        };

        fetchConsultations();
    }, []);

    function sortByName(a, b) {
        if (!defaultSort) return null;
        return sort ? (a.name > b.name ? 1 : -1) : (a.name < b.name ? 1 : -1);
    }

    function sortName() {
        setDefaultSort(true);
        setSort(!sort);
    }

    const rows = consultations
        .sort(sortByName)
        .map((row) => (<Table.Tr key={row.key}>
                <Table.Td>
                    <Group gap="sm">
                        <Avatar size={26} src={row.avatar} radius={26}/>
                        <Text size="sm" fw={500}>
                            {row.patientName}
                        </Text>
                    </Group>
                </Table.Td>
                <Table.Td>{row.treatmentType}</Table.Td>
                <Table.Td>{row.date}</Table.Td>
                <Table.Td>{row.startingTime}</Table.Td>
                <Table.Td>{row.endTime}</Table.Td>
                <Table.Td>
                    <Badge
                        variant="light"
                        color={row.status === "Completed" ? "green" : "red"}
                        size="sm"
                        radius="lg"
                    >
                        {row.status}
                    </Badge>
                </Table.Td>
            </Table.Tr>));

    return (<ScrollArea style={{height: "100%", width: "100%"}}>
            <Table
                verticalSpacing="sm"
                highlightOnHover
                withColumnBorders
                withRowBorders={false}
                striped
                style={{overflowY: "auto"}}
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
                                    style={{width: "70%", height: "70%"}}
                                    stroke={1.5}
                                />
                            </ActionIcon>
                        </Table.Th>
                        <Table.Th>Treatment Type</Table.Th>
                        <Table.Th>Date</Table.Th>
                        <Table.Th>Starting Time</Table.Th>
                        <Table.Th>End Time</Table.Th>
                        <Table.Th>
                            <Group gap={5}>Status
                                <InfoIconWithProps
                                    badges={[{
                                        name: 'Canceled',
                                        color: 'red',
                                        description: 'Appointment Canceled'
                                    }, {name: 'Completed', color: 'green', description: 'Appointment Completed'},]}
                                    width={322}
                                />
                            </Group>
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {loading ? <Loader size="lg" color="blue"/> : rows}
                </Table.Tbody>
            </Table>
        </ScrollArea>);
}

export default ConsultationsLogView;
