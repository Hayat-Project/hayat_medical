import { Button, Title, Textarea, Center, Loader } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";

function ConsultaionSummary({ onSessionSummary, transcript }) {
  const handleSessionSummary = () => {
    onSessionSummary(transcript);
  };
  console.log(transcript);
  return (
    <>
      <Title order={4}> Consultation Summary </Title>
      {transcript == "" ? (
        <Center h={100}>
          <Loader color="blue" />
        </Center>
      ) : (
        <>
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
            onClick={handleSessionSummary}
          >
            Validate Summary
          </Button>
        </>
      )}
    </>
  );
}

export default ConsultaionSummary;
