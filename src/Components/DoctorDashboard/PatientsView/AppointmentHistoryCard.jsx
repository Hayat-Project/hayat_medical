import { Badge, Button, Group, Modal, Table, Loader, Text } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import InfoIconWithProps from "../../InfoIconWithProps";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

function AppointmentHistoryCard(props) {
  const [retrievedData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const elements = props.data;
  const [opened, { open, close }] = useDisclosure(false);
  let responseBody;

  const handleView = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/extract-image-data", {
        method: "GET"
      });

      if (response.ok) {
        responseBody = await response.json(); // object
        console.log(responseBody);
        setData(responseBody);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
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
        <form
          onSubmit={handleView}
          action="http://localhost:3000/extract-image-data"
          method="get"
        >
          <Button
            type="submit"
            onClick={open}
            rightSection={<IconEye size={14} />}
            size="xs"
          >
            View
          </Button>
        </form>
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

      <Modal opened={opened} onClose={close} title="View Previous Consultation">
        {loading ? (
          <Loader color="blue" />
        ) : (
          <>
            <Text mb={10}>{retrievedData.message}</Text>
            <Text>{retrievedData.data}</Text>
          </>
        )}
      </Modal>
    </>
  );
}

export default AppointmentHistoryCard;
