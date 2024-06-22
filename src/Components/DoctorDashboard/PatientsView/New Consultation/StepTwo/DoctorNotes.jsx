import { Title, Textarea } from "@mantine/core";

function DoctorNotes({ onDoctorNoteChange }) {
  const handleDoctorNoteChange = (event) => {
    onDoctorNoteChange(event.target.value);
  };
  return (
    <>
      <Title order={4}>Doctor Consultation Notes</Title>
      <Textarea
        mt={10}
        placeholder="Enter consultation notes"
        autosize
        radius="md"
        minRows={8}
        maxRows={8}
        onChange={handleDoctorNoteChange}
      />
    </>
  );
}

export default DoctorNotes;
