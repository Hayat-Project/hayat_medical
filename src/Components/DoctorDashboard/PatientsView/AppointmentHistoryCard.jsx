import {
  Badge,
  Button,
  Group,
  Modal,
  Table,
  Loader,
  Text,
} from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import InfoIconWithProps from "../../InfoIconWithProps";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

function AppointmentHistoryCard(props) {
  const [retrievedData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const elements = props.data;
  const [opened, { open, close }] = useDisclosure(false);
  const keyToLabelMap = {
    note: "Doctor Note",
    summary: "Consultation Summary",
    drugs: "Prescribed Drugs",
  };

  const handleView = async (event, image) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/extract-image-data?image=${image}&id=${props.patientId}`, {
        method: "GET"
      });

      if (response.ok) {
        const responseBody = await response.json(); 
        console.log(responseBody);
        setData(responseBody);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setLoading(false);
    }
  };

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.treatment}</Table.Td>
      <Table.Td>{element.booking}</Table.Td>
      <Table.Td>{element.comments}</Table.Td>
      <Table.Td>{element.image}</Table.Td>
      <Table.Td>
        <Badge
          variant="light"
          color={element.status === "Completed" ? "green" : "orange"}
          size="sm"
          radius="lg"
        >
          {element.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Button
          onClick={(event) => {
            open();
            handleView(event, element.image);
          }}
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
            <Table.Th>Radiological Image</Table.Th>
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
          <div>
            {retrievedData &&
              Object.entries(retrievedData.data).map(([key, value]) => (
                <div key={key}>
                  <Text>
                    <strong>{keyToLabelMap[key]}:</strong>
                    {typeof value === "object" ? JSON.stringify(value) : value}
                  </Text>
                </div>
              ))}
          </div>
        )}
      </Modal>
    </>
  );
}

export default AppointmentHistoryCard;
