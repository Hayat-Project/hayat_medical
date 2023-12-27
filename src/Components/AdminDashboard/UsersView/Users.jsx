import MainHeader from "../../MainHeader";
import { Card, Group, Tabs, Button } from "@mantine/core";
import { IconUser, IconPlus, IconStethoscope, IconUsersGroup } from '@tabler/icons-react';
import UsersTable from "./UsersTable";
import UsersData from "../../../mockdata/UsersData.json";
import medicalStaffData from "../../../mockdata/medicalStaffData.json";
import admissionsStaffData from "../../../mockdata/admissionsStaffData.json";

function Users() {

  return (
    <>
      <Group justify="space-between">
        <MainHeader badge={false} header="Users" />
        <Button size="md" leftSection={<IconPlus size={14} />} variant="subtle">
          Add User
        </Button>
      </Group>

      <Card mt={15} shadow="sm" withBorder >
        <Tabs radius="md" defaultValue="Patients">
          <Tabs.List>
            <Tabs.Tab value="Patients" leftSection={<IconUser size={16} />}>
              Patient
            </Tabs.Tab>
            <Tabs.Tab value="Staff" leftSection={<IconStethoscope size={16} />}>
              Medical Staff
            </Tabs.Tab>
            <Tabs.Tab value="Admission" leftSection={<IconUsersGroup size={16} />}>
              Admission Staff
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Patients">
            <UsersTable
              userData={UsersData}
              heading1="ID"
              heading2="Name"
              heading3="Gender"
              heading4="Emirates ID"
            />
          </Tabs.Panel>
          <Tabs.Panel value="Staff">
            <UsersTable
              userData={medicalStaffData}
              heading1="ID"
              heading2="Name"
              heading3="Designation:"
              heading4="Depatrment"
            />
          </Tabs.Panel>
          <Tabs.Panel value="Admission">
            <UsersTable
              userData={admissionsStaffData}
              heading1="ID"
              heading2="Name"
              heading3="Gender"
              heading4="Emirates ID"
            />
          </Tabs.Panel>
        </Tabs>
      </Card>
    </>
  );
}

export default Users;