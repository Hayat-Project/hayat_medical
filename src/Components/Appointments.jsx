import {
  Grid,
  Card,
  Text,
  Title,
  TextInput,
  Checkbox,
  Group,
  Flex,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import MainHeader from "./MainHeader";

function Appointments() {
  return (
    <Flex mih={50} gap="xl" direction="column" wrap="wrap">
      <Flex mih={50} direction="column" wrap="wrap">
        <MainHeader
          header="Appointments"
          subheader="Find your appointments Here!"
          dataSize="50"
          badge={false}
        />
      </Flex>

      <Flex mih={50} gap="20" direction="column" wrap="wrap">
        <Grid>
          <Grid.Col span={8}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              h={1000}
            ></Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Grid>
              <Grid.Col>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Group justify="center">
                    <Calendar size="xl" />
                  </Group>
                </Card>
              </Grid.Col>
              <Grid.Col>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Title order={5} ta="center">
                    Tasks
                  </Title>
                  <TextInput mt={10} placeholder="Type a task" />
                  <Checkbox mt={20} label="This is a task" />
                  <Checkbox mt={20} label="This is a task" />
                  <Checkbox mt={20} label="This is a task" />
                  <Checkbox mt={20} label="This is a task" />
                </Card>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Appointments;
