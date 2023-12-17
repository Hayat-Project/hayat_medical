import React from "react";
import { useMediaQuery } from "@mantine/hooks";
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
import { useNavigate } from "react-router-dom";

function PatientsGallery(props) {
  const searchWord = props.searchWord;
  const isLargeDisplay = useMediaQuery(`(max-width: 1920px)`);
  const navigate = useNavigate();

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: "lg" }}
      verticalSpacing={{ base: "md", sm: "lg" }}
    >
      {patientsData
        .filter((item) => {
          return searchWord === ""
            ? item
            : item.name.toLowerCase().includes(searchWord);
        })
        .map((patient) => (
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
                <Text size="sm">
                  <b>ID</b>: {patient.id}
                </Text>
                <Text size="sm">
                  <b>DOB</b>: {patient.dob}
                </Text>
                <Text size="sm">
                  <b>Age</b>: {patient.age}
                </Text>
                <Text size="sm">
                  <b>Gender</b>: {patient.gender}
                </Text>
                <Text size="sm">
                  <b>Nationality</b>: {patient.nationality}
                </Text>
              </Stack>
            </Group>
            <Button
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              onClick={() =>
                navigate(`/Patients/Patient Profile/${patient.id}`)
              }
            >
              View Patient
            </Button>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export default PatientsGallery;
