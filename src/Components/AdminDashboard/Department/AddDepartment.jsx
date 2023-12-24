import { Button, Group, TextInput, Textarea } from "@mantine/core";

function AddDepartment() {
  return (
    <>
      <TextInput label="Department Name" placeholder="Enter department name" />
      <Textarea
        mt={10}
        label="Description"
        placeholder="Enter department description"
      />
      <Group justify="flex-end" mt={30}>
        <Button variant="filled">Add Department</Button>
      </Group>
    </>
  );
}

export default AddDepartment;
