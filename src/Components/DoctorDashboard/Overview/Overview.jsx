import { Grid, Card, Group, SimpleGrid, Title } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import MainHeader from '../../MainHeader';
import TodoList from "./TodoList";
import OverviewCards from "./OverviewCards";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import {
  IconUser,
  IconClock,
  IconBroadcast,
  IconUsers,
} from "@tabler/icons-react";
import DoctorProfileCard from "./DoctorProfileCard";
import UpcomingAppointments from "../AppointmentsView/UpcomingAppointments";
import ConsultationsLogView from "../ConsultationsView/ConsultationsLogView";

function Overview() {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const [search, setSearch] = useState("");
  return (
    <>
      <MainHeader
        header="Overview"
        subheader="Doctor overview dashboard"
        badge={false}
      />

      <Grid mt={15}>
        <Grid.Col span={isMobile ? 12 : 8}>
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
              <ConsultationsLogView searchWord={search.toLowerCase()} />
            </Card>
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid cols={1}>
            <Card shadow="sm" padding="23" radius="md">
              <DoctorProfileCard
                name="Dr. Ahmad Aljaghbeir"
                position="Head of general Surgery"
                rate="4.7"
                Patients="2,8k"
              />
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
