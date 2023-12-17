import React from "react";
import { Stack, Text } from "@mantine/core";

function TextCompounant(props) {
  return (
    <Stack gap={0}>
      <Text size="sm">{props.header}</Text>
      <Text size="md" fw={700}>
        {props.text}
      </Text>
    </Stack>
  );
}

export default TextCompounant;
