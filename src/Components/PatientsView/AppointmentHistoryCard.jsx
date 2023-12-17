import { Badge, Button, Group, Table, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconEye } from "@tabler/icons-react";
import InfoIconWithProps from "../InfoIconWithProps";

function AppointmentHistoryCard(props) {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const elements = props.data;
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.treatment}</Table.Td>
      <Table.Td>{element.booking}</Table.Td>
      <Table.Td>{element.comments}</Table.Td>
      <Table.Td>
        {
          <Badge
            variant="light"
            color={element.status === "Completed" ? "green" : "orange"}
            size="sm"
            radius="lg"
          >
            {element.status}
          </Badge>
        }
      </Table.Td>
      <Table.Td>
        <Button rightSection={<IconEye size={14} />} size="xs">
          View
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Treatment Type</Table.Th>
          <Table.Th>Booking Time</Table.Th>
          <Table.Th>Comments</Table.Th>
          <Table.Th>
            <Group gap={5}>
              Status
              <InfoIconWithProps
                badges={[
                  {
                    name: "Upcoming",
                    color: "orange",
                    description: "Upcoming Appointment",
                  },
                  {
                    name: "Completed",
                    color: "green",
                    description: "Appointment Completed",
                  },
                ]}
                width={322}
              />
            </Group>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default AppointmentHistoryCard;
