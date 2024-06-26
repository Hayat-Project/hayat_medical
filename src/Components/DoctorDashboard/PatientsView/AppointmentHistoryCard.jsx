import {
  Badge,
  Button,
  Group,
  Modal,
  Table,
  Loader,
  Text,
  Center,
  ScrollArea,
  Card,
  Title,
  Divider,
  Grid,
  Image,
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
    setLoading(true);
    try {
      const response = await fetch(
        `https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/extract-image-data?image=${image}&id=${props.patientId}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const responseBody = await response.json();
        console.log("Retrieved data:", responseBody);
        
        const imageUrlResponse = await fetch(`https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/get-image-url?patientId=${props.patientId}&imageName=${image}`);
        const imageUrlData = await imageUrlResponse.json();
        
        setData({
          doctorNote: responseBody.data.note.replace(/"/g, ''),
          sessionSummary: responseBody.data.summary.replace(/"/g, ''),
          prescriptionDrugs: responseBody.data.drugs,
          imageFileName: image,
          imageURL: imageUrlData.url
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.treatmentType}</Table.Td>
      <Table.Td>{element.bookingTime}</Table.Td>
      <Table.Td>{element.comments}</Table.Td>
      <Table.Td>{element.imageFileName}</Table.Td>
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
        {element.status === "Completed" && (
          <Button
            onClick={(event) => {
              open();
              handleView(event, element.imageFileName);
            }}
            rightSection={<IconEye size={14} />}
            size="xs"
          >
            View
          </Button>
        )}
      </Table.Td>
    </Table.Tr>
  ));

  const renderContent = (retrievedData, element) => {
    if (!retrievedData || !element) {
      return <Text>No data available</Text>;
    }

    const doctorNote = retrievedData.doctorNote || "No notes available";
    const sessionSummary = retrievedData.sessionSummary || "No summary available";
    const prescriptionDrugs = retrievedData.prescriptionDrugs || [];

    return (
      <Grid>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" withBorder mb="lg">
            <Title order={4}>Consultation Details</Title>
            <Divider my="sm" />
            <Group position="apart" grow>
              <Text weight={500}>Date:</Text>
              <Text>{element.date}</Text>
            </Group>
            <Group position="apart" grow>
              <Text weight={500}>Treatment Type:</Text>
              <Text>{element.treatmentType}</Text>
            </Group>
            <Group position="apart" grow>
              <Text weight={500}>Booking Time:</Text>
              <Text>{element.bookingTime}</Text>
            </Group>
            <Group position="apart" grow>
              <Text weight={500}>Comments:</Text>
              <Text>{element.comments}</Text>
            </Group>
            <Group position="apart" grow>
              <Text weight={500}>Radiological Image:</Text>
              <Text>{element.imageFileName}</Text>
            </Group>
          </Card>
          <Card shadow="sm" padding="lg" withBorder mb="lg">
              <Title order={4}>Radiological Image</Title>
              <Divider my="sm" />
              <Image
                src={retrievedData.imageURL}
                alt="Radiological Image"
                fit="cover"
                height="100%"
              />
            </Card>
        </Grid.Col>

        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" withBorder mb="lg">
            <Title order={4}>{keyToLabelMap.note}</Title>
            <Divider my="sm" />
            <Text mt="md">{doctorNote}</Text>
          </Card>

          <Card shadow="sm" padding="lg" withBorder mb="lg">
            <Title order={4}>{keyToLabelMap.summary}</Title>
            <Divider my="sm" />
            <Text mt="md">{sessionSummary}</Text>
          </Card>


          <Card shadow="sm" padding="lg" withBorder style={{ height: '100%' }}>
            <Title order={4}>{keyToLabelMap.drugs}</Title>
            <Divider my="sm" />
            {prescriptionDrugs.length > 0 ? (
              <ScrollArea scrollbarSize={4}>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Name</Table.Th>
                      <Table.Th>Strength</Table.Th>
                      <Table.Th>Form</Table.Th>
                      <Table.Th>Dosage</Table.Th>
                      <Table.Th>Frequency</Table.Th>
                      <Table.Th>Route</Table.Th>
                      <Table.Th>Days</Table.Th>
                      <Table.Th>Quantity</Table.Th>
                      <Table.Th>Remarks</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {prescriptionDrugs.map((drug, index) => (
                      <Table.Tr key={index}>
                        <Table.Td>{drug.name}</Table.Td>
                        <Table.Td>{drug.strength}</Table.Td>
                        <Table.Td>{drug.form}</Table.Td>
                        <Table.Td>{drug.dosage}</Table.Td>
                        <Table.Td>{drug.frequency}</Table.Td>
                        <Table.Td>{drug.route}</Table.Td>
                        <Table.Td>{drug.days}</Table.Td>
                        <Table.Td>{drug.quantity}</Table.Td>
                        <Table.Td>{drug.remarks}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </ScrollArea>
            ) : (
              <Text mt="md">No prescribed drugs available</Text>
            )}
          </Card>
        </Grid.Col>
      </Grid>
    );
  };

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
                      name: "Completed",
                      color: "green",
                      description: "Consultation Completed",
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


      <Modal opened={opened} onClose={close} size="70%">
        {loading ? (
          <Center>
            <Loader color="blue" />
          </Center>
        ) : (
          <ScrollArea style={{ height: '70vh' }}>
            {retrievedData ? renderContent(retrievedData, elements.find(el => el.imageFileName === retrievedData.imageFileName)) : <Text>No data available</Text>}
          </ScrollArea>
        )}
      </Modal>
    </>
  );
}

export default AppointmentHistoryCard;
