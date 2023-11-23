import { Card, Text, Center } from "@mantine/core";

function OverviewCards(props) {
  return (
    <Card shadow="sm" padding="md">
      <Center>{props.icon}</Center>
      <Center>
        <Text fw={500} size="lg" mt="md">
          {props.text}
        </Text>
      </Center>
      <Center p={10}>
        <Text order={1} size="2rem">
          {props.subText}
        </Text>
      </Center>
    </Card>
  );
}

export default OverviewCards;
