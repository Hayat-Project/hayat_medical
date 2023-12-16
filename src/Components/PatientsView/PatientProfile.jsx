import MainHeader from "../MainHeader";
import patientsData from "../../mockdata/patientsData.json";
import {
  SimpleGrid,
  Card,
  Text,
  Button,
  Group,
  Avatar,
  Stack,
} from "@mantine/core";

function PatientProfile(props) {
  const selectedPatientId = 253735;
  const selectedPatient = patientsData.find(
    (patient) => patient.id === selectedPatientId
  );
  console.log(selectedPatient);

  if (!selectedPatient) {
    // Handle the case where the patient with the specified ID is not found
    return (
      <div>
        <p>No patient found with ID {selectedPatientId}</p>
      </div>
    );
  }

  return (
    <>
      <MainHeader
        header="Patient Profile"
        type="patients"
        dataSize="10"
        badge={false}
      />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 10, sm: "lg" }}
        verticalSpacing={{ base: "md", sm: "lg" }}
      >
        <Card
          key={selectedPatient.id}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Group justify="center">
            <Card.Section>
              <Avatar size={70} src={selectedPatient.src} />
            </Card.Section>
          </Group>
          <Group justify="center" mt="md" mb="xs">
            <Text size="lg">{selectedPatient.name}</Text>
          </Group>
          <Group mt="md" mb="xs">
            <Stack align="flex-start" justify="flex-start" gap="xs">
              <Text size="sm">
                <b>ID</b>: {selectedPatient.id}
              </Text>
              <Text size="sm">
                <b>DOB</b>: {selectedPatient.dob}
              </Text>
              <Text size="sm">
                <b>Age</b>: {selectedPatient.age}
              </Text>
              <Text size="sm">
                <b>Gender</b>: {selectedPatient.gender}
              </Text>
              <Text size="sm">
                <b>Nationality</b>: {selectedPatient.nationality}
              </Text>
            </Stack>
          </Group>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default PatientProfile;
