import { useState } from "react";
import { Stepper, Button, Group, Grid, Divider, ActionIcon, Title, FileButton, Text, Space } from "@mantine/core";
import { IconPlayerRecord, IconPlayerPause, IconUpload } from '@tabler/icons-react';
import UploadAudio from "./StepOne/UploadAudio";
import ReportTable from "../ReportTable";
import ReportsTabs from "../ReportsTabs";

function ConsultaionSteps() {
  const [active, setActive] = useState(0);
  const [file, setFile] = useState();
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
          <Grid mt={50}>
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
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Third step" description="Get full access">
          Step 3 content: Get full access
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
