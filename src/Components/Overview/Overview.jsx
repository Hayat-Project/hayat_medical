import { Grid, Card, Group, SimpleGrid, Title } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import MainHeader from "../MainHeader";
import TodoList from "./TodoList";
import OverviewCards from "./OverviewCards";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconUser,
  IconClock,
  IconBroadcast,
  IconUsers,
} from "@tabler/icons-react";
import DoctorProfileCard from "./DoctorProfileCard";
import UpcomingAppointments from "../AppointmentsView/UpcomingAppointments";
import ConsulatationLogWidget from "../ConsultationsView/ConsultationLogWidget";

function Overview() {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);

  return (
    <>
      <MainHeader
        header="Overview"
        subheader="Doctor overview dashboard"
        badge={false}
      />

      <Grid mt={15}>
        <Grid.Col span={isMobile ? 12 : 8} >
          <SimpleGrid>
            <SimpleGrid cols={{ base: 2, sm: 2, lg: 4 }}>
              <OverviewCards
                text="All Patients"
                subText="5"
                icon={
                  <IconUser
                    color="var(--mantine-color-blue-filled)"
                    size="3rem"
                    stroke={1.5}
                  />
                }
              />
              <OverviewCards
                text="Online Consultation"
                subText="1"
                icon={
                  <IconBroadcast
                    color="var(--mantine-color-blue-filled)"
                    size="3rem"
                    stroke={1.5}
                  />
                }
              />
              <OverviewCards
                text="Offline Consultation"
                subText="4"
                icon={
                  <IconUsers
                    color="var(--mantine-color-blue-filled)"
                    size="3rem"
                    stroke={1.5}
                  />
                }
              />
              <OverviewCards
                text="Waiting Patients"
                subText="4"
                icon={
                  <IconClock
                    color="var(--mantine-color-blue-filled)"
                    size="3rem"
                    stroke={1.5}
                  />
                }
              />
            </SimpleGrid>
            <Card shadow="sm" padding="lg" h={316} radius="md">
              <Title order={4}>Upcoming Patients</Title>
              <UpcomingAppointments />
            </Card>
            <Card shadow="sm" padding="lg" h={316} radius="md">
              <Title order={4}>Consulatations Log</Title>
              {/* ToDo: Change to  ConsulatationsLogView, replace this and then delete it*/}
              <ConsulatationLogWidget/>
            </Card>
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid cols={1}>
            <Card shadow="sm" padding="23" radius="md">
              <DoctorProfileCard />
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <TodoList />
            </Card>
            <Card shadow="sm" padding="8" radius="md">
              <Group justify="center">
                <Calendar size="md" />
              </Group>
            </Card>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Overview;
