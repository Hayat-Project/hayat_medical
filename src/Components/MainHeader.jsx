import { Text, Badge, Group } from "@mantine/core";

function MainHeader(props) {
  return (
    <Group mt={5}>
      <Text fw={500}>{props.text}</Text>
      <Badge variant="light" color="rgba(138, 74, 212, 0.97)" size="xs">
        {props.dataSize} patients
      </Badge>
    </Group>
  );
}

export default MainHeader;
