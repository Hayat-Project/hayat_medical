import {
  Flex,
  Grid,
  Table,
  Group,
  Avatar,
  Text,
  Badge,
  Button,
} from "@mantine/core";
import elements from "../../mockdata/data.json";

function ConsulatationLogWidget() {
  const rows = elements.slice(0, 5).map((row) => (
    <Table.Tr key={row.key}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={26} src={row.avatar} radius={26} />
          <Text size="sm" fw={500}>
            {row.name}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>{row.consultaion}</Table.Td>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>{row.stime}</Table.Td>
      <Table.Td>{row.etime}</Table.Td>
      <Table.Td>
        {
          <Badge
            variant="light"
            color={row.status === "Done" ? "green" : "red"}
            size="sm"
            radius="lg"
          >
            {row.status}
          </Badge>
        }
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Flex mih={50} gap="20" direction="column">
      <Grid>
        <Grid.Col>
          <Table
            verticalSpacing="sm"
            highlightOnHover
            withColumnBorders
            withRowBorders={false}
            striped
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Patient Name</Table.Th>
                <Table.Th>Online/Offline </Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Starting Time</Table.Th>
                <Table.Th>End Time</Table.Th>
                <Table.Th>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
          <Button variant="transparent" color="gray" size="xs">
            More Patients Logs..
          </Button>
        </Grid.Col>
      </Grid>
    </Flex>
  );
}

export default ConsulatationLogWidget;
