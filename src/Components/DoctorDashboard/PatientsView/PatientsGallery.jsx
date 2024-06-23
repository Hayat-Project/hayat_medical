import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { SimpleGrid, Card, Text, Button, Group, Avatar, Stack, Loader } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function PatientsGallery(props) {
  const searchWord = props.searchWord.toLowerCase();
  const isLargeDisplay = useMediaQuery('(max-width: 1920px)');
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5032/hayat-consultation-syste-dd9b0/us-central1/api/patients');
        const data = await response.json();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(patient => 
    searchWord === "" ? true : patient.name.toLowerCase().includes(searchWord)
  );

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: 'lg' }}
      verticalSpacing={{ base: 'md', sm: 'lg' }}
    >
      {loading ? (
        <Loader />
      ) : (
        filteredPatients.map(patient => (
          <Card
            key={patient.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Group justify="center">
              <Card.Section>
                <Avatar size={70} src={patient.src} />
              </Card.Section>
            </Group>
            <Group justify="center" mt="md" mb="xs">
              <Text size="lg">{patient.name}</Text>
            </Group>
            <Group mt="md" mb="xs">
              <Stack align="flex-start" justify="flex-start" gap="xs">
                <Text size="sm"><b>ID</b>: {patient.id}</Text>
                <Text size="sm"><b>DOB</b>: {patient.dob}</Text>
                <Text size="sm"><b>Age</b>: {patient.age}</Text>
                <Text size="sm"><b>Gender</b>: {patient.gender}</Text>
                <Text size="sm"><b>Nationality</b>: {patient.nationality}</Text>
              </Stack>
            </Group>
            <Button
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              onClick={() => navigate(`/doctorDashboard/PatientProfile/${patient.id}`)}
            >
              View Patient
            </Button>
          </Card>
        ))
      )}
    </SimpleGrid>
  );
}

export default PatientsGallery;
