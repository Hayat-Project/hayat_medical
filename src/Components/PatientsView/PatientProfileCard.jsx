import React from "react";
import { Text, Group, Avatar, Stack, Button, Card } from "@mantine/core";

function PatientProfileCard(props) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Card.Section mt={5}>
        <Group justify="center">
          <Avatar size={100} src={props.avatar} />
        </Group>
      </Card.Section>

      <Group justify="center">
        <Stack gap="2">
          <Group justify="center">
            <Text size="xl">{props.name}</Text>
          </Group>
          <Group justify="center">
            <Text c="dimmed" size="sm">
              {props.email}
            </Text>
          </Group>
        </Stack>
      </Group>

      <Group justify="center" mt={32}>
        <Button variant="default">Send Message</Button>
      </Group>
    </Card>
  );
}

export default PatientProfileCard;
