import { Card, Tabs, rem, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconReportMedical, IconBodyScan } from "@tabler/icons-react";
import AppointmentHistoryCard from "./AppointmentHistoryCard";
const elements = [
  {
    id: 1,
    date: "23 June 2023",
    treatment: "Regular checkup",
    booking: "4:00 PM",
    comments: "No comments",
    status: "Upcoming",
  },
  {
    id: 2,
    date: "15 August 2023",
    treatment: "Dental Cleaning",
    booking: "2:30 PM",
    comments: "Patient is a regular visitor.",
    status: "Upcoming",
  },
  {
    id: 3,
    date: "7 November 2023",
    treatment: "Eye Examination",
    booking: "10:00 AM",
    comments: "Patient complains of occasional blurry vision.",
    status: "Completed",
  },
  {
    id: 4,
    date: "12 April 2023",
    treatment: "Blood Test",
    booking: "8:45 AM",
    comments: "Fasting required before the test.",
    status: "Completed",
  },
  {
    id: 5,
    date: "19 January 2023",
    treatment: "Physical Therapy",
    booking: "3:15 PM",
    comments: "Patient recovering from a sports injury.",
    status: "Completed",
  },
  {
    id: 6,
    date: "30 September 2023",
    treatment: "Vaccination",
    booking: "1:30 PM",
    comments: "Routine vaccination for children.",
    status: "Completed",
  },
  {
    id: 7,
    date: "5 May 2023",
    treatment: "MRI Scan",
    booking: "11:45 AM",
    comments: "Patient with a history of migraines.",
    status: "Completed",
  },
  {
    id: 8,
    date: "18 February 2023",
    treatment: "Counseling Session",
    booking: "2:00 PM",
    comments: "Patient seeking support for stress management.",
    status: "Completed",
  },
  {
    id: 9,
    date: "10 October 2023",
    treatment: "Orthopedic Consultation",
    booking: "9:30 AM",
    comments: "Patient with joint pain in the right knee.",
    status: "Completed",
  },
];
function AppointmentHistoryTabs(props) {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const iconStyle = { width: rem(19), height: rem(19) };
  const completedAppointments = elements.filter(
    (element) => element.status === "Completed"
  );
  const upcomingAppointments = elements.filter(
    (element) => element.status === "Upcoming"
  );

  return (
    <>
      <Title mt={7} order={3}>
        Appointments
      </Title>
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
