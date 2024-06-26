import { useState, useEffect } from "react";
import {
  Stepper,
  Button,
  Group,
  Divider,
  Title,
  Space,
  Center,
  Loader,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import General from "./StepOne/General";
import DoctorNotes from "./StepTwo/DoctorNotes";
import ConsultaionSummary from "./StepFour/ConsultationSummary";
import RecordingSession from "./RecordingSession";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import DrugsForm from "./DrugsForm";
import Cookies from "js-cookie";

function ConsultaionSteps(props) {
  const [active, setActive] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [prescriptionDrugs, setPrescriptionDrugs] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const data = useForm({
    initialValues: {
      doctorNote: "", // Doctor notes TextInput field
      sessionSummary: "", // Placeholder String
      prescriptionDrugs: [],
      imageLabel: "",
      patientID: props.patientID, // Array of JSON objects
    },
  });

  const handleDoctorNoteChange = (value) => {
    data.setFieldValue("doctorNote", value);
  };

  const handleImageLabelChange = (value) => {
    data.setFieldValue("imageLabel", value);
  };

  const handleSessionSummary = (value) => {
    data.setFieldValue("sessionSummary", value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = Cookies.get("email");
    setLoading(true); 
    console.log(data.values);
    try {
      const response = await fetch(`http://127.0.0.1:5032/hayat-consultation-syste-dd9b0/us-central1/api/watermark-image/${email}/${props.patientID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.values), // JSON
      });

      if (response.ok) {
        alert("Appointment saved successfully!"); 
        navigate(-1);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false); 
    }
  };

  const consultationResult = async () => {
    try {
      const response = await fetch("https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/cosultationResult", {
        method: "GET",
      });
      if (response.ok) {
        let responseBody = await response.json();
        setTranscript(responseBody.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (active === 3) {
      consultationResult();
    }
  }, [active]);

  const updatePrescriptionDrugs = (newDrugs) => {
    setPrescriptionDrugs(newDrugs);
    data.setFieldValue("prescriptionDrugs", newDrugs);
  };

  return (
    <>
      {loading && (
        <Center>
          <Loader size="xl" />
        </Center>
      )}
      {!loading && (
        <>
          <Stepper active={active}>
            <Stepper.Step label="First step" description="General">
              <Space h="lg" />
              <General
                onImageLabelChange={handleImageLabelChange}
                patientID={props.patientID}
              />
            </Stepper.Step>

            <Stepper.Step label="Second step" description="Doctor Notes">
              <Space h="lg" />
              <DoctorNotes onDoctorNoteChange={handleDoctorNoteChange} />
            </Stepper.Step>

            <Stepper.Step label="Third step" description="Medicine Prescription">
              <DrugsForm
                prescriptionDrugs={prescriptionDrugs}
                setPrescriptionDrugs={updatePrescriptionDrugs}
              />
            </Stepper.Step>

            <Stepper.Step label="Fourth step" description="Consultation Summary">
              <Space h="lg" />
              <ConsultaionSummary
                transcript={transcript}
                onSessionSummary={handleSessionSummary}
              />
            </Stepper.Step>

            <Stepper.Completed>
              <Space h="lg" />
              <Center>
                <Title order={2}>
                  Completed - Consultation Saved Successfully!
                </Title>
              </Center>
            </Stepper.Completed>
          </Stepper>

          <Group justify="center" mt="xl">
            {active < 4 ? (
              <>
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button onClick={nextStep}>Next step</Button>
              </>
            ) : (
              <Button
                onClick={handleSubmit}
                leftSection={<IconCircleCheck size={20} />}
                size="md"
              >
                Submit
              </Button>
            )}
          </Group>

          <Space h="lg" />
          <Divider my="md" />

          <Space h="lg" />
          <RecordingSession />
        </>
      )}
    </>
  );
}

export default ConsultaionSteps;
