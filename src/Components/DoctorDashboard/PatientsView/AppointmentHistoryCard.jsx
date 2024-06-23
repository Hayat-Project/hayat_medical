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
    // Add other keys and their corresponding labels here
  };

  const handleView = async (event, image) => {
    event.preventDefault();

    try {
      setLoading(true); // Ensure the loader is shown
      const response = await fetch(
        `http://localhost:3000/extract-image-data?image=${image}&id=${props.patientId}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const responseBody = await response.json(); // object
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
    <tr key={element.id}>
      <td>{element.date}</td>
      <td>{element.treatment}</td>
      <td>{element.booking}</td>
      <td>{element.comments}</td>
      <td>{element.image}</td>
      <td>
        <Badge
          variant="light"
          color={element.status === "Completed" ? "green" : "orange"}
          size="sm"
          radius="lg"
        >
          {element.status}
        </Badge>
      </td>
      <td>
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
      </td>
    </tr>
  ));

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Treatment Type</th>
            <th>Booking Time</th>
            <th>Comments</th>
            <th>Radiological Image</th>
            <th>
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
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
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
