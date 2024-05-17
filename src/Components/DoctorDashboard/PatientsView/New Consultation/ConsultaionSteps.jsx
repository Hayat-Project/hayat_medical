import { useState } from "react";
import { Stepper, Button, Group, Grid, Divider, ActionIcon, Title, FileButton, Text, Space, Textarea, Center, Loader } from "@mantine/core";
import { IconPlayerRecord, IconPlayerPause, IconUpload, IconCheck } from '@tabler/icons-react';
import ReportsTabs from "../ReportsTabs";

function ConsultaionSteps() {
  const [active, setActive] = useState(0);
  const [file, setFile] = useState();
  const [transcript, setTranscript] = useState("");
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step 
          label="First step"
          description="Recording consultation session"
        >
          <Space h="lg"/>
          <Grid>
           <Grid.Col span={6}> 
              <Title order={2} >Record Session</Title>
              <Group justify="center" gap="xl" mt={30}>
                <ActionIcon variant="light" color="red" aria-label="Settings" size={50} radius="md">
                  <IconPlayerRecord style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon> 
                <ActionIcon variant="light" aria-label="Settings" size={50} radius="md">
                  <IconPlayerPause style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon> 
              </Group>
              <Space h="md"/>
              <Divider my="xs" label="OR" labelPosition="center" orientation="vertical" />
              <Space h="md"/>
              <Group justify="center">
              <FileButton onChange={setFile} accept="image/png,image/jpeg">
                {(props) => <Button  leftSection={<IconUpload />} {...props}>Upload audio</Button>}
              </FileButton>
            </Group>

            {file && (
              <Text size="sm" ta="center" mt="sm">
                Picked file: {file.name}
              </Text>
            )}
            </Grid.Col>

            <Grid.Col span={6}> <ReportsTabs /> </Grid.Col>
          </Grid>


        </Stepper.Step>
        <Stepper.Step label="Second step" description="Consultation Summary">
        <Space h="lg"/>
        <Title order={4} > Consultation Summary </Title>
        {/* {transcript == "" ? (
          <Center h={100}>
            <Loader color="blue" />
          </Center>
        ) : (
          <> */}
            <Textarea
              mt={10}
              autosize
              radius="md"
              minRows={8}
              maxRows={8}
              value={transcript}
            />
            <Button
              mt={10}
              color="blue"
              leftSection={<IconCheck />}
              //onClick={handleSessionSummary}
            >
              Validate Summary
            </Button>
          {/* </>
        )} */}
        </Stepper.Step>
        <Stepper.Step label="Third step" description="Doctor Notes">
        <Space h="lg"/>
        <Title order={4} >Doctor Consultation Notes</Title>
        <Textarea
          mt={10}
          placeholder="Enter consultation notes"
          autosize
          radius="md"
          minRows={8}
          maxRows={8}
          //onChange={handleDoctorNoteChange}
        />
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Create an account">
          Step 4 content: Create an account
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

export default ConsultaionSteps;
