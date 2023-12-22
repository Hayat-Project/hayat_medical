import MainHeader from "../MainHeader";
import departmentsData from "../../mockdata/departmentsData.json";
import { Table, ActionIcon, Card, Flex, Button, Group } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { FaRegEdit } from "react-icons/fa";
import SearchBarFilter from "../SearchBarFilter";

function Departments() {
  const data = departmentsData.map((department) => (
    <Table.Tr key={department.id}>
      <Table.Td>{department.name}</Table.Td>
      <Table.Td>{department.description}</Table.Td>
      <Table.Td>
        <Group justify="center" gap="1">
        <ActionIcon color="blue" variant="outline">
          <FaRegEdit size={14} />
        </ActionIcon>
        <ActionIcon color="red" variant="outline" ml={10}>
          <IconTrash size={14} />
        </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <MainHeader header="Departments" subheader="" badge={false} />
      <Group justify="space-between" mt={10}>
        <SearchBarFilter
          filterTable={(name) => setSearch(name)}
          placeholder="Search for department"
          width={300}
        />
        <Button variant="filled">Add Department</Button>
      </Group>

      <Card shadow="sm" withBorder mt={20}>
        <Table
          verticalSpacing="lg"
          highlightOnHover
          withColumnBorders
          withRowBorders={false}
          striped
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Department Name</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{data}</Table.Tbody>
        </Table>
      </Card>
    </>
  );
}

export default Departments;