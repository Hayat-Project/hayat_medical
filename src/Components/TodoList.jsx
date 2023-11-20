import { Title, Checkbox, TextInput, ScrollArea } from "@mantine/core";

function TodoList() {
  return (
    <>
      <Title order={5} ta="center">
        Tasks
      </Title>
      <TextInput mt={10} placeholder="Type a task" />
      <ScrollArea h={200}>
        <Checkbox mt={20} label="This is a task" />
        <Checkbox mt={20} label="This is a task" />
        <Checkbox mt={20} label="This is a task" />
        <Checkbox mt={20} label="This is a task" />
        <Checkbox mt={20} label="This is a task" />
        <Checkbox mt={20} label="This is a task" />
        <Checkbox mt={20} label="This is a task" />
        <Checkbox mt={20} label="This is a task" />
      </ScrollArea>
    </>
  );
}

export default TodoList;
