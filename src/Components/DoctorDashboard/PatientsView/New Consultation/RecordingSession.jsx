import { useState } from "react";
import {
  Button,
  Group,
  Grid,
  Divider,
  ActionIcon,
  FileButton,
  Text,
  Space,
} from "@mantine/core";
import {
  IconPlayerRecord,
  IconPlayerPause,
  IconUpload,
} from "@tabler/icons-react";

function RecordingSession() {
    const [file, setFile] = useState();
  return (
    <>
       <Grid>
        <Grid.Col span={3}></Grid.Col>
        <Grid.Col span={6}>
          {/* <Title order={2}>Record Session</Title> */}
          <Group justify="center" gap="xl" mt={30}>
            <ActionIcon
              variant="light"
              color="red"
              aria-label="Settings"
              size={50}
              radius="md"
            >
              <IconPlayerRecord
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon
              variant="light"
              aria-label="Settings"
              size={50}
              radius="md"
            >
              <IconPlayerPause
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
          <Space h="md" />
          <Divider
            my="xs"
            label="OR"
            labelPosition="center"
            orientation="vertical"
          />
          <Space h="md" />
          <Group justify="center">
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => (
                <Button leftSection={<IconUpload />} {...props}>
                  Upload audio
                </Button>
              )}
            </FileButton>
          </Group>

          {file && (
            <Text size="sm" ta="center" mt="sm">
              Picked file: {file.name}
            </Text>
          )}
        </Grid.Col>
        <Grid.Col span={3}></Grid.Col>
      </Grid>
    </>
  );
}

export default RecordingSession;
