import { Table, Button, Checkbox, Modal, Image } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";


function ReportTable(props) {
  const [opened, { open, close }] = useDisclosure(false);
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
        <Button onClick={open} rightSection={<IconEye size={14} />} size="xs">
          View
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{props.title}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Modal 
        opened={opened}
        onClose={close}
        title="X-Ray"
        size="xl"
      >
        <Image src='/images/image.jpg'/>
      </Modal>
    </>
    
  );
}

export default ReportTable;
