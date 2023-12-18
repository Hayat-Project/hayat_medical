import {
  Text,
  Title,
  Button,
  Switch,
  Stack,
  Group,
} from "@mantine/core";
import { useState } from "react";

function SettingOption(props) {
    // const [showSwitch, setShowSwitch] = useState(false);
    // setShowSwitch(true);
    // console.log(showSwitch);
  return (
      <Group justify="space-between" mt={20}>
        <Stack align="flex-start" gap="1">
          <Title order={5}>{props.title}</Title>
          <Text size="md" c="dimmed">
            {props.text}
          </Text>
        </Stack>
        <Button variant="filled">
            {props.button}
        </Button>
      </Group>
  );
}

export default SettingOption;
