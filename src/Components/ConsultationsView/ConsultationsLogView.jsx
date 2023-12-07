import {
  Text,
  Table,
  Avatar,
  Group,
  Badge,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import InfoIconWithProps from "../InfoIconWithProps";
import { IconArrowsSort } from "@tabler/icons-react";
import { useState } from "react";
import elements from "../../mockdata/data.json";

function ConsultationsLogView(props) {
  const searchWord = props.searchWord;
  const [sort, setSort] = useState("");
  const [defaultSort, setDefaultSort] = useState("");

  function sortByName(a, b) {
    return defaultSort
      ? sort
        ? a.name > b.name
          ? 1
          : -1
        : a.name < b.name
        ? 1
        : -1
      : null;
  }

  function sortName() {
    setDefaultSort(true);
    sort ? setSort(false) : setSort(true);
  }

  const rows = elements
    .sort(sortByName)
    .filter((item) => {
      return searchWord === ""
        ? item
        : item.name.toLowerCase().includes(searchWord);
    })
    .map((row) => (
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
    <ScrollArea style={{ height: "100%", width: "100%" }}>
      <Table
        verticalSpacing="sm"
        highlightOnHover
        withColumnBorders
        withRowBorders={false}
        striped
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              Patient Name{" "}
              <ActionIcon
                variant="transparent"
                aria-label="Settings"
                onClick={sortName}
              >
                <IconArrowsSort
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Table.Th>
            <Table.Th>Online/Offline </Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Starting Time</Table.Th>
            <Table.Th>End Time</Table.Th>
            <Table.Th>
              <Group gap={5}>
                Status
                <InfoIconWithProps
                  badges={[
                    {
                      name: "Canceled",
                      color: "red",
                      description: "IDK WHAT TO WRITE ",
                    },
                    {
                      name: "Done",
                      color: "green",
                      description: "IDK WHAT TO WRITE ",
                    },
                  ]}
                  width={322}
                />
              </Group>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

export default ConsultationsLogView;
