import { Card, Grid, Tabs} from "@mantine/core";
import { IconUser, IconUsersGroup} from '@tabler/icons-react';
import MainHeader from "../MainHeader";
import patientMessages from "../../mockdata/patientMessages.json";
import staffMessages from "../../mockdata/staffMessages.json"
import UserList from "./userList";

function Messages() {

  return (
    <>
      <MainHeader header="Messages" dataSize="2" type="Unread Messages"/>
      <Grid mt="20">
        <Grid.Col span={4}>
          <Card shadow="sm" withBorder> 
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
      </Grid>
    </>
  );
}

export default Messages;