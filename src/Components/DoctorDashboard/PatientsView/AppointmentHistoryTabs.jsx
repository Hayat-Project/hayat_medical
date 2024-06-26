import { useEffect, useState } from "react";
import { Card, Tabs, Title, Group, Button, Loader, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import AppointmentHistoryCard from "./AppointmentHistoryCard";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function AppointmentHistoryTabs(props) {
  const selectedPatientId = props.patientID;
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      const email = Cookies.get("email");
      try {
        const response = await fetch(`https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/appointments/${email}/${selectedPatientId}`);
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched Appointments:", data);
          setAppointments(data);
        } else {
          console.log("Error fetching appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedPatientId) {
      fetchAppointments();
    }
  }, [selectedPatientId]);

  if (loading) {
    return (
      <Center style={{ height: "100vh" }}>
        <Loader size="xl" />
      </Center>
    );
  }

  return (
    <>
      <Group justify="space-between">
        <Title mt={7} order={3}>
          Appointments
        </Title>
        <Button
          variant="subtle"
          leftSection={<IconPlus size={14} />}
          onClick={() =>
            navigate(
              `/doctorDashboard/Patient Profile/New Consultation/${selectedPatientId}`
            )
          }
        >
          New Consultation
        </Button>
      </Group>

      <Card mt={7} shadow="sm" h={520} withBorder>
        <Tabs radius="md" defaultValue="Appointment">
          <Tabs.List>
            <Tabs.Tab value="Appointment">All Appointments</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Appointment">
            <AppointmentHistoryCard
              data={appointments}
              patientId={selectedPatientId}
            />
          </Tabs.Panel>
        </Tabs>
      </Card>
    </>
  );
}

export default AppointmentHistoryTabs;
