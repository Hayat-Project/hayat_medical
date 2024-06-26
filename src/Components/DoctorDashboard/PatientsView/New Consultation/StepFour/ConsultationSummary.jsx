import {
  Button,
  Title,
  Textarea,
  Center,
  Loader,
  Text,
  Group,
} from "@mantine/core";
import {
  IconCheck,
  IconCircleCheck,
  IconExclamationCircle,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

function ConsultaionSummary({ onSessionSummary, transcript }) {
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  useEffect(() => {
    setValue(transcript);
  }, [transcript]);

  const handleSessionSummary = () => {
    // Simulating validation success for demonstration
    if (value.trim() !== "") {
      setFeedback({
        message: "Summary validated successfully",
        type: "success",
      });
      onSessionSummary(value);
    } else {
      setFeedback({ message: "Summary cannot be empty", type: "error" });
    }
  };

  return (
    <>
      <Title order={4}> Consultation Summary </Title>
      {transcript === "" ? (
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
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
          <Button
            mt={10}
            color="blue"
            leftSection={<IconCheck />}
            onClick={handleSessionSummary}
          >
            Validate Summary
          </Button>
          {feedback.message && (
            <Group align="center" mt={5}>
              {feedback.type === "success" ? (
                <IconCircleCheck size={18} color="green" />
              ) : (
                <IconExclamationCircle size={18} color="red" />
              )}
              <Text size="sm" style={{ marginLeft: "8px" }}>
                {feedback.message}
              </Text>
            </Group>
          )}
        </>
      )}
    </>
  );
}

export default ConsultaionSummary;
