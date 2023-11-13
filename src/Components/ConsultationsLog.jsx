import { Text, Badge, Table, Avatar, Group, Flex } from "@mantine/core";
import { useState } from "react";
import FilterBar from "./FilterBar";

const elements = [
  {
    key: 0,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Olivia Rhye",
    date: "Dec 30 2023",
    stime: "09:42 PM",
    etime: "10:50 PM",
    status: (
      <Badge variant="light" color="red" size="sm" radius="lg">
        Canceled
      </Badge>
    ),
  },
  {
    key: 1,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Olivia Rhye",
    date: "Dec 30 2023",
    stime: "09:42 PM",
    etime: "10:50 PM",
    status: (
      <Badge variant="light" color="teal" size="sm" radius="lg">
        Done
      </Badge>
    ),
  },
  {
    key: 2,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Olivia Rhye",
    date: "Dec 30 2023",
    stime: "09:42 PM",
    etime: "10:50 PM",
    status: (
      <Badge variant="light" color="red" size="sm" radius="lg">
        Canceled
      </Badge>
    ),
  },
  {
    key: 3,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Olivia Rhye",
    date: "Dec 30 2023",
    stime: "09:42 PM",
    etime: "10:50 PM",
    status: (
      <Badge variant="light" color="teal" size="sm" radius="lg">
        Done
      </Badge>
    ),
  },
  {
    key: 4,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Olivia Rhye",
    date: "Dec 30 2023",
    stime: "09:42 PM",
    etime: "10:50 PM",
    status: (
      <Badge variant="light" color="teal" size="sm" radius="lg">
        Done
      </Badge>
    ),
  },
  {
    key: 5,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Olivia Rhye",
    date: "Dec 30 2023",
    stime: "09:42 PM",
    etime: "10:50 PM",
    status: (
      <Badge variant="light" color="red" size="sm" radius="lg">
        Canceled
      </Badge>
    ),
  },
  {
    key: 6,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Olivia Rhye",
    date: "Dec 30 2023",
    stime: "09:42 PM",
    etime: "10:50 PM",
    status: (
      <Badge variant="light" color="red" size="sm" radius="lg">
        Canceled
      </Badge>
    ),
  },
  {
    key: 7,
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Olivia Rhye",
    date: "Dec 30 2023",
    stime: "09:42 PM",
    etime: "10:50 PM",
    status: (
      <Badge variant="light" color="red" size="sm" radius="lg">
        Canceled
      </Badge>
    ),
  },
];

function ConsultationsLog() {
  const [scrolled, setScrolled] = useState(false);

  const rows = elements.map((row) => (
    <Table.Tr key={row.key}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={26} src={row.avatar} radius={26} />
          <Text size="sm" fw={500}>
            {row.name}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>{row.stime}</Table.Td>
      <Table.Td>{row.etime}</Table.Td>
      <Table.Td>{row.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Flex mih={50} gap="xs" direction="column" wrap="wrap">
        <Flex mih={50} direction="column" wrap="wrap">
          <Group mt={5}>
            <Text fw={500}>Consultations Log</Text>
            <Badge variant="light" color="rgba(138, 74, 212, 0.97)" size="xs">
              {elements.length} patients
            </Badge>
          </Group>
        </Flex>
        <Flex mih={50} gap="20" direction="column" wrap="wrap">
          <FilterBar />

          <Table.ScrollContainer minWidth={1000} type="native">
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
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Starting Time</Table.Th>
                  <Table.Th>End Time</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody h={500}>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Flex>
      </Flex>
    </>
  );
}

export default ConsultationsLog;
