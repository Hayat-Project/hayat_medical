import MainHeader from "../MainHeader";
import { Card, Tabs} from "@mantine/core";
import { IconUser, IconUsersGroup} from '@tabler/icons-react';
import UsersTable from "./UsersTable";

function Users(){
      
    return (
        <>
            <MainHeader badge={false} header="Users" />
            <Card shadow="sm" withBorder > 
            <Tabs radius="md" defaultValue="Patients">   
              <Tabs.List>
                <Tabs.Tab value="Patients" leftSection={<IconUser size={16} />}>
                    Patient
                </Tabs.Tab>
                <Tabs.Tab value="Doctor" leftSection={<IconUser size={16} />}>
                    Doctor
                </Tabs.Tab>
                <Tabs.Tab value="Nurse" leftSection={<IconUsersGroup size={16} />}>
                    Nurse
                </Tabs.Tab>
                        <Tabs.Tab value="Radiologist" leftSection={<IconUser size={16} />}>
                    Radiologist
                </Tabs.Tab>
                        <Tabs.Tab value="Admission" leftSection={<IconUser size={16} />}>
                    Admission Staff
                </Tabs.Tab>
              </Tabs.List>
              
              <Tabs.Panel value="Patients">
              </Tabs.Panel>
              <Tabs.Panel value="Doctor">
                <UsersTable />
              </Tabs.Panel>
              <Tabs.Panel value="Nurse">

              </Tabs.Panel>
              <Tabs.Panel value="Radiologist">
         
              </Tabs.Panel>
              <Tabs.Panel value="Admission">
          
              </Tabs.Panel>
            </Tabs>   
          </Card>
        </> 
    );
}

export default Users;