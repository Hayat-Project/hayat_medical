import { Card, Tabs, Title, Group, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import AppointmentHistoryCard from "./AppointmentHistoryCard";
import elements from "../../../mockdata/appointmentsData.json"
import { useNavigate } from "react-router-dom";

function AppointmentHistoryTabs() {
  const completedAppointments = elements.filter(
    (element) => element.status === "Completed"
  );
  const upcomingAppointments = elements.filter(
    (element) => element.status === "Upcoming"
  );

  const navigate = useNavigate();

  return (
    <>
      <Group justify="space-between">
        <Title mt={7} order={3}>
          Appointments
        </Title>
        <Button variant="subtle" leftSection={<IconPlus size={14} />} 
            onClick={() => navigate(`/Patients/Patient Profile/New Consultation`)}>
          New Consultation
        </Button>
      </Group>

      <Card mt={7} shadow="sm" h={520} withBorder>
        <Tabs radius="md" defaultValue="Appointment">
          <Tabs.List>
            <Tabs.Tab value="Appointment">All Appointments</Tabs.Tab>
            <Tabs.Tab value="Upcoming">Upcoming</Tabs.Tab>
            <Tabs.Tab value="Completed">Completed</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Appointment">
            <AppointmentHistoryCard data={elements} />
          </Tabs.Panel>
          <Tabs.Panel value="Upcoming">
            <AppointmentHistoryCard data={upcomingAppointments} />
          </Tabs.Panel>
          <Tabs.Panel value="Completed">
            <AppointmentHistoryCard data={completedAppointments} />
          </Tabs.Panel>
        </Tabs>
      </Card>
    </>
  );
}

export default AppointmentHistoryTabs;
