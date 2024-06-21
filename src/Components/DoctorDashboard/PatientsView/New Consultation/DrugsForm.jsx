import {
  Card,
  Title,
  Select,
  SimpleGrid,
  Button,
  ScrollArea,
  TextInput,
  Table,
  ActionIcon,
  Group,
} from "@mantine/core";
import prescriptionDrugs from "../../../../mockdata/prescriptionDrugs.json";
import { IconTrash } from "@tabler/icons-react";

function DrugsForm() {
  const rows = prescriptionDrugs.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.strength}</Table.Td>
      <Table.Td>{element.form}</Table.Td>
      <Table.Td>{element.dosage}</Table.Td>
      <Table.Td>{element.frequency}</Table.Td>
      <Table.Td>{element.route}</Table.Td>
      <Table.Td>{element.days}</Table.Td>
      <Table.Td>{element.quantity}</Table.Td>
      <Table.Td>{element.remarks}</Table.Td>
      <Table.Td>
        <ActionIcon color="red" variant="outline">
          <IconTrash size={14} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <form
      // onSubmit={handleSubmit}
      action="http://localhost:3000/watermark-image"
      method="post"
    >
      <SimpleGrid mt={15}>
        <Title size="h3" mt={30} mb={5}>
          Medicine Prescription
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 1, lg: 5 }}>
          <Select
            label="Drug"
            withAsterisk={true}
            placeholder="Pick value"
            data={[
              "Paracetamol",
              "Aspirin",
              "Ibuprofen",
              "Amoxicillin",
              "Loratadine",
            ]}
            searchable
          />
          <Select
            label="Strength"
            withAsterisk={true}
            placeholder="Pick value"
            data={["5mg", "10mg", "20mg", "50mg"]}
            searchable
          />
          <Select
            label="Form"
            placeholder="Pick value"
            data={["Tablet", "Capsule", "Liquid", "Injection"]}
            searchable
          />
          <Select
            label="Dosage"
            withAsterisk={true}
            placeholder="Pick value"
            data={[
              "Once a day",
              "Twice a day",
              "Three times a day",
              "As needed",
            ]}
            searchable
          />
          <Select
            label="Frequency"
            placeholder="Pick value"
            data={["Daily", "Weekly", "Monthly", "PRN"]}
            searchable
          />
          <Select
            label="Route"
            withAsterisk={true}
            placeholder="Pick value"
            data={["Oral", "Injection", "Topical", "Inhalation"]}
            searchable
          />
          <Select
            label="Days"
            withAsterisk={true}
            placeholder="Pick value"
            data={["1 day", "7 days", "14 days", "30 days"]}
            searchable
          />
          <Select
            label="Quantity"
            placeholder="Pick value"
            data={["1", "2", "3", "4"]}
            searchable
          />
          <TextInput label="Remarks" placeholder="Add extra notes" />
          <Button mt={25}>Add Drug</Button>
        </SimpleGrid>
        <SimpleGrid>
          <Card h={350} mt={50} shadow="sm" withBorder>
            <Title size="h3">Prescription Table</Title>
            <ScrollArea>
              <Table mt={10} highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Drug</Table.Th>
                    <Table.Th>Strength</Table.Th>
                    <Table.Th>Form</Table.Th>
                    <Table.Th>Dosage</Table.Th>
                    <Table.Th>Frequency</Table.Th>
                    <Table.Th>Route</Table.Th>
                    <Table.Th>Days</Table.Th>
                    <Table.Th>Quantity</Table.Th>
                    <Table.Th>Remarks</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
            </ScrollArea>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </form>
  );
}
export default DrugsForm;
