import { Badge, Button, Group, Modal, Table, Title } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import InfoIconWithProps from "../../InfoIconWithProps";
import { useDisclosure } from "@mantine/hooks";

function AppointmentHistoryCard(props) {
  const elements = props.data;
  const [opened, { open, close }] = useDisclosure(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/extract-image-data", {
        method: "GET"
      });
      console.log(response.body);
      // if (response.ok) {
      //   navigate(-1);
      // } else {
      //   console.error("Error submitting form:", response.statusText);
      // }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

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
        <Button
          action="http://localhost:3000/extract-image-data"
          method="get"
          onClick={open}
          rightSection={<IconEye size={14} />}
          size="xs"
        >
          View
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
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

      <Modal
        opened={opened}
        onClose={close}
        title="View Previous Consultation"
      >
        <Title>Test</Title>
      </Modal>
    </>
  );
}

export default AppointmentHistoryCard;
