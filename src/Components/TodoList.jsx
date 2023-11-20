import {
  Checkbox,
  TextInput,
  Text,
  ScrollArea,
  Group,
  ActionIcon,
} from "@mantine/core";
import { IconPlaylistAdd } from "@tabler/icons-react";

function TodoList() {
  return (
    <>
      <Text>Todo List</Text>
      <Group>
        <TextInput
          w="90%"
          mt={10}
          placeholder="Add Todo Task"
          rightSection={
            <ActionIcon
              variant="transparent"
              aria-label="Settings"
              // onClick={addTodo}
            >
              <IconPlaylistAdd size="xl" stroke={1.5} />
            </ActionIcon>
          }
        />
      </Group>

      <ScrollArea h={202}>
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
