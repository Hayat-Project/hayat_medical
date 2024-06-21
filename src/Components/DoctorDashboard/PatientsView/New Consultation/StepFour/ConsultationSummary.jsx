import {
  Button,
  Title,
  Textarea,
} from "@mantine/core";
import {
  IconCheck,
} from "@tabler/icons-react";
import { useState } from "react";

function ConsultaionSummary() {
  const [transcript, setTranscript] = useState("");
  return (
    <>
     <Title order={4}> Consultation Summary </Title>
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
    </>
  );
}

export default ConsultaionSummary;
