import { Card, Grid, Tabs, rem} from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import MainHeader from "./MainHeader";

function Messages() {
  return (
    <>
      <MainHeader header="Messages" dataSize="2" type="Unread Messages"/>
      <Grid>
        <Grid.Col span={4}>
          <Card shadow="sm" withBorder> 
            <Tabs radius="md" defaultValue="Staff">   
              <Tabs.List>
                <Tabs.Tab value="Staff" leftSection={<IconPhoto size={16} />}>
                  Staff
                </Tabs.Tab>
                <Tabs.Tab value="Patients" leftSection={<IconMessageCircle size={16} />}>
                  Patients
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="Staff">
                Staff tab content
              </Tabs.Panel>
              <Tabs.Panel value="Patients">
                Patients tab content
              </Tabs.Panel>
            </Tabs>   
          
          
          
          
          </Card>
        </Grid.Col>
      </Grid>
      
    </>

  );
}

export default Messages;