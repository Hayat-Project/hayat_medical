import React from "react";
import { Text, Group, Avatar, Stack } from "@mantine/core";

function DoctorProfileCard() {
  return (
    <Group>
      <Group justify="center">
        <Avatar
          size={100}
          src="https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVvcGxlfHx8fHx8MTcwMDE4Njg2Mg&ixlib=rb-4.0.3&q=80&w=250"
        />
      </Group>
      <Group justify="center" mt="md" mb="xs">
        <Stack gap="0">
          <Text size="xl">Dr.Ahmad Aljaghbeir</Text>
          <Text c="dimmed" size="sm">
            Head of general Surgery
          </Text>
          <Group justify="center" mt="md" mb="xs">
            <Text size="md" fw={700}>
              Overall Rating
            </Text>
            <Text c="blue" size="md">
              4.7
            </Text>
            <Text size="md">-</Text>
            <Text size="md" fw={700}>
              Total Patients
            </Text>
            <Text c="blue" size="md">
              2,8K
            </Text>
          </Group>
        </Stack>
      </Group>
    </Group>
  );
}

export default DoctorProfileCard;
