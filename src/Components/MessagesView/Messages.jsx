import { Avatar, Card, Grid, Group, Stack, Tabs, Text,Title, ActionIcon, Input} from "@mantine/core";
import { IconUser, IconUsersGroup, IconPhone, IconVideo, IconSend, IconPaperclip} from '@tabler/icons-react';
import MainHeader from "../MainHeader";
import patientMessages from "../../mockdata/patientMessages.json";
import staffMessages from "../../mockdata/staffMessages.json"
import UserList from "./UserList";

function Messages() {

  return (
    <>
      <MainHeader header="Messages" dataSize="2" type="Unread Messages"/>
      <Grid mt="20">
        <Grid.Col span={4}>
          <Card shadow="sm" withBorder > 
            <Tabs radius="md" defaultValue="Patients">   
              <Tabs.List>
                <Tabs.Tab value="Patients" leftSection={<IconUser size={16} />}>
                  Patients
                </Tabs.Tab>
                <Tabs.Tab value="Staff" leftSection={<IconUsersGroup size={16} />}>
                  Staff
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="Patients">
                <UserList userData={patientMessages}/>
              </Tabs.Panel>
              <Tabs.Panel value="Staff">
                <UserList userData={staffMessages} />
              </Tabs.Panel>
            </Tabs>   
          </Card>
        </Grid.Col>
        <Grid.Col span={8}>
          <Card shadow="sm" withBorder> 
            <Group justify="space-between">
                <Group>
                  <Avatar size="lg" src="https://images.unsplash.com/photo-1600603405959-6d623e92445c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXR8fHx8fHwxNzAwMTg3NTIw&ixlib=rb-4.0.3&q=80&w=250" />
                  <Stack gap={3}>
                    <Title order={3}>Ahmad Abdullah</Title>
                    <Text size="md">Online</Text>
                  </Stack>
                </Group>
                <Group gap={3}>
                  <ActionIcon variant="subtle" size="xl">
                    <IconPhone style={{ width: '70%', height: '70%' }} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon variant="subtle" size="xl">
                    <IconVideo style={{ width: '70%', height: '70%' }} stroke={1.5} />
                  </ActionIcon>
                </Group>
            </Group>
          </Card>
        <Card shadow="sm" withBorder h="70%">
          {/* Message content */}
        </Card>
        <Card shadow="sm" withBorder> 
          <Group>
            <Input placeholder="Message..." w="89%" size="lg"/>
            <Group gap={3}>
                <ActionIcon variant="subtle" size="xl">
                <IconSend style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon variant="subtle" size="xl">
                <IconPaperclip style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Group>
        </Card>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Messages;