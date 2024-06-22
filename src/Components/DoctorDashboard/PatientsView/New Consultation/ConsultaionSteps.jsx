import { useState } from "react";
import {
  Stepper,
  Button,
  Group,
  Divider,
  Title,
  Space,
  Center,
} from "@mantine/core";
import {
} from "@tabler/icons-react";
import DrugsForm from "./DrugsForm";
import General from "./StepOne/General";
import DoctorNotes from "./StepTwo/DoctorNotes";
import ConsultaionSummary from "./StepFour/ConsultationSummary";
import RecordingSession from "./RecordingSession";
import { useForm } from "@mantine/form";
import prescriptionDrugs from "../../../../mockdata/prescriptionDrugs.json";
import { useNavigate } from "react-router-dom";

function ConsultaionSteps() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const data = useForm({
    initialValues: {
      doctorNote: "", // Doctor notes TextInput field
      sessionSummary: "", // Placeholder String
      prescriptionDrugs: prescriptionDrugs, // Array of JSON objects
    },
  });
 
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

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="General">
          <Space h="lg" />
          <General />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Doctor Notes">
          <Space h="lg" />
          <DoctorNotes/>
        </Stepper.Step>
        <Stepper.Step label="Third step" description="Medicine Prescription">
          <DrugsForm />
        </Stepper.Step>
        <Stepper.Step label="Fourth step" description="Consultation Summary">
          <Space h="lg" />
          <ConsultaionSummary/>
        </Stepper.Step>

        <Stepper.Completed>
          <Space h="lg" />
          <Center>
            <Title order={2}>Completed - Consultation Saved Successfly!</Title>
          </Center>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>

      <Space h="lg" />
      <Divider my="md" />

      <Space h="lg" />
     <RecordingSession/>
    </>
  );
}

export default ConsultaionSteps;
