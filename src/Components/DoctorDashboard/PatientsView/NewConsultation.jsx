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
import MainHeader from "../../MainHeader";
import prescriptionDrugs from "../../../mockdata/prescriptionDrugs.json";
import { IconTrash } from "@tabler/icons-react";
import ReportsTabs from "./ReportsTabs";
import SessionSummary from "./SessionSummary";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

function NewConsultation() {
  const data = useForm({
    initialValues: {
      doctorNote: "", // Doctor notes TextInput field
      sessionSummary: "", // Placeholder String
      prescriptionDrugs: prescriptionDrugs, // Array of JSON objects
    },
  });

  const transcript = `
  Doctor: Good morning. How can I help you today?

  Patient: Good morning, Doctor. For the past two days, I've been experiencing pretty severe diarrhea. It's been quite uncomfortable.

  Doctor: I'm sorry to hear that. Can you tell me more about your symptoms? Have you noticed anything else besides the diarrhea?

  Patient: Yes, I've also had stomach cramps and a bit of a fever last night. I haven't been able to eat much because I'm afraid it might make things worse.

  Doctor: Understandable. Have you traveled recently or eaten anything unusual that might have caused this?

  Patient: No, I haven't traveled. But yes, I did try a new restaurant a couple of days ago. It's possible that something I ate there didn't agree with me.

  Doctor: That could be a contributing factor. It's also important to consider if you've been in close contact with anyone who's been ill or if this could be related to a medication you're taking. Have you taken any new medications recently?

  Patient: No, I haven't taken any new medications.

  Doctor: Alright. Diarrhea can be caused by a variety of factors, including infections, food intolerances, and digestive disorders. Given your symptoms and the onset following a meal out, it might be food-related or an infection. It's important to stay hydrated. Dehydration can be a concern with diarrhea. Have you been able to drink fluids?

  Patient: I've been trying to drink water and some sports drinks to stay hydrated.

  Doctor: That's good. It's important to drink plenty of fluids. In addition to water and sports drinks, oral rehydration solutions can be very helpful. For now, try to eat bland foods like rice, bananas, and toast as your stomach allows. Avoid dairy, caffeine, and fatty foods until your symptoms improve.

  Patient: I see. Should I be taking any medication for this?

  Doctor: Over-the-counter anti-diarrheal medications can help reduce the frequency of your bowel movements and may provide relief. However, if your diarrhea is caused by an infection, it's sometimes better to let it run its course. Let's not start with any medications for now, especially since you have a fever, which could indicate an infection. I would also like to run a few tests to rule out bacterial or parasitic infections, especially if your symptoms don't improve in the next day or two.

  Patient: Okay, that makes sense. How will I know if it's getting serious and I need to come back or seek more urgent care?

  Doctor: If you experience signs of dehydration, such as decreased urination, dry mouth, or dizziness, if your diarrhea lasts more than three days, if your fever gets higher, or if you see blood in your stool, you should seek medical attention immediately. In the meantime, I'll order some tests to help identify the cause of your symptoms.

  Patient: Got it. Thank you, Doctor. I'll follow your advice and keep an eye on my symptoms.

  Doctor: You're welcome. Don't hesitate to call if you have any concerns or if your symptoms worsen. We're here to help. I'll have the nurse come in with some information on hydration and diet, as well as the lab form for the tests. Take care, and I hope you feel better soon.

  Patient: Thank you, Doctor. I appreciate your help.
`

  const handleDoctorNoteChange = (value) => {
    data.setFieldValue("doctorNote", value);
  };

  const handleSessionSummary = (value) => {
    data.setFieldValue("sessionSummary", value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/watermark-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.values), // JSON
      });

      if (response.ok) {
        navigate(-1);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

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
    <>
      <MainHeader header="New Consultation" badge={false} />
      <form
        onSubmit={handleSubmit}
        action="http://localhost:3000/watermark-image"
        method="post"
      >
        <SimpleGrid mt={15}>
          <Title size="h3" mb={5}>
            General
          </Title>
          <Group>
            <Select
              label="Diagnosis State "
              w={350}
              withAsterisk={true}
              placeholder="Pick value"
              data={[
                "ICD-10 Code A",
                "ICD-10 Code B",
                "ICD-10 Code C",
                "ICD-10 Code D",
              ]}
              searchable
            />
            <Select
              label="Allergy"
              w={350}
              placeholder="Pick value"
              defaultValue="None"
              data={["None", "Pollen", "Dust", "Peanuts", "Penicillin"]}
              searchable
            />
          </Group>
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
          <SimpleGrid
            cols={{ base: 1, sm: 1, lg: 2 }}
            gap={{ base: 3, sm: 2, lg: 3 }}
            spacing="md"
            verticalSpacing="xs"
          >
            <ReportsTabs height={270} checkbox="checkbox" />
            <Card shadow="sm" withBorder>
              <SessionSummary
                onDoctorNoteChange={handleDoctorNoteChange}
                onSessionSummary={handleSessionSummary}
              />
            </Card>
          </SimpleGrid>
          <Group mt={10} justify="flex-end">
            <Button onClick={() => navigate(-1)} variant="outline" w={150}>
              Cancel
            </Button>
            <Button type="submit" w={150}>
              Submit
            </Button>
          </Group>
        </SimpleGrid>
      </form>
    </>
  );
}

export default NewConsultation;
