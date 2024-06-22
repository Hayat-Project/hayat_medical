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
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

function DrugsForm({ prescriptionDrugs, setPrescriptionDrugs }) {
  const [newDrug, setNewDrug] = useState({
    name: "",
    strength: "",
    form: "",
    dosage: "",
    frequency: "",
    route: "",
    days: "",
    quantity: "",
    remarks: "",
  });

  const handleAddDrug = () => {
    const requiredFields = [
      "name",
      "strength",
      "form",
      "dosage",
      "frequency",
      "route",
      "days",
      "quantity",
    ];

    for (const field of requiredFields) {
      if (!newDrug[field]) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    addDrug(newDrug);
  };

  const addDrug = (newDrug) => {
    setPrescriptionDrugs([...prescriptionDrugs, newDrug]);
    setNewDrug({
      name: "",
      strength: "",
      form: "",
      dosage: "",
      frequency: "",
      route: "",
      days: "",
      quantity: "",
      remarks: "",
    });
  };

  const handleNewDrugChange = (field) => (value) => {
    setNewDrug({ ...newDrug, [field]: value });
  };

  const handleDeleteDrug = (index) => {
    const updatedDrugs = prescriptionDrugs.filter((_, i) => i !== index);
    setPrescriptionDrugs(updatedDrugs);
  };

  const rows = prescriptionDrugs.map((element, index) => (
    <Table.Tr key={element.name + index}>
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
        <ActionIcon
          color="red"
          variant="outline"
          onClick={() => handleDeleteDrug(index)}
        >
          <IconTrash size={14} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <form>
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
              clearable
              value={newDrug.name}
              onChange={handleNewDrugChange("name")}
            />
            <Select
              label="Strength"
              withAsterisk={true}
              placeholder="Pick value"
              data={["5mg", "10mg", "20mg", "50mg"]}
              searchable
              clearable
              value={newDrug.strength}
              onChange={handleNewDrugChange("strength")}
            />
            <Select
              label="Form"
              placeholder="Pick value"
              withAsterisk={true}
              data={["Tablet", "Capsule", "Liquid", "Injection"]}
              searchable
              clearable
              value={newDrug.form}
              onChange={handleNewDrugChange("form")}
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
              clearable
              value={newDrug.dosage}
              onChange={handleNewDrugChange("dosage")}
            />
            <Select
              label="Frequency"
              withAsterisk={true}
              placeholder="Pick value"
              data={["Daily", "Weekly", "Monthly", "PRN"]}
              searchable
              clearable
              value={newDrug.frequency}
              onChange={handleNewDrugChange("frequency")}
            />
            <Select
              label="Route"
              withAsterisk={true}
              placeholder="Pick value"
              data={["Oral", "Injection", "Topical", "Inhalation"]}
              searchable
              clearable
              value={newDrug.route}
              onChange={handleNewDrugChange("route")}
            />
            <Select
              label="Days"
              withAsterisk={true}
              placeholder="Pick value"
              data={["1 day", "7 days", "14 days", "30 days"]}
              searchable
              clearable
              value={newDrug.days}
              onChange={handleNewDrugChange("days")}
            />
            <Select
              label="Quantity"
              placeholder="Pick value"
              withAsterisk={true}
              data={["1", "2", "3", "4"]}
              searchable
              clearable
              value={newDrug.quantity}
              onChange={handleNewDrugChange("quantity")}
            />
            <TextInput
              label="Remarks"
              placeholder="Add extra notes"
              value={newDrug.remarks}
              onChange={(event) =>
                handleNewDrugChange("remarks")(event.currentTarget.value)
              }
            />
            <Button mt={25} onClick={handleAddDrug}>
              Add Drug
            </Button>
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
                      <Table.Th>Action</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                </Table>
              </ScrollArea>
            </Card>
          </SimpleGrid>
        </SimpleGrid>
      </form>
    </>
  );
}

export default DrugsForm;
