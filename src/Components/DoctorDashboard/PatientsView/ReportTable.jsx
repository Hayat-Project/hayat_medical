import { Table, Button, Checkbox } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";

function ReportTable(props) {
  const checkbox = props.checkbox;
  const elements = props.data;
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      {checkbox === 'checkbox' ? <Table.Td>
        <Checkbox/>
      </Table.Td> : null}
      <Table.Td>{element.reportName}</Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>
        <Button rightSection={<IconEye size={14} />} size="xs">
          View
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>{props.title}</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default ReportTable;
