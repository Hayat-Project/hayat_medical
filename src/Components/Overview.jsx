import { Flex, Grid, Skeleton, Card, Group, Stack } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import MainHeader from "./MainHeader";
import ConsulatationLogWidget from "./ConsultationsView/ConsultationLogWidget";
import TodoList from "./TodoList";
import OverviewCards from "./OverviewCards";
import {
  IconUser,
  IconClock,
  IconBroadcast,
  IconUsers,
} from "@tabler/icons-react";
import DoctorProfileCard from "./DoctorProfileCard";
const child = <Skeleton height={140} radius="md" animate={false} />;

function Overview() {
  return (
    <Flex mih={50} gap="xl" direction="column" wrap="wrap">
      <Flex mih={50} direction="column" wrap="wrap">
        <MainHeader
          header="Overview"
          subheader="Doctor overview dashboard"
          badge={false}
        />
      </Flex>

      <Flex mih={50} gap="20" direction="column" wrap="wrap">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 2 }}>
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
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 2 }}>
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
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 2 }}>
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
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 2 }}>
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
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Card shadow="sm" padding="23" radius="md">
              <DoctorProfileCard />
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 8 }}>
            <Card shadow="sm" padding="lg" radius="md">
              <ConsulatationLogWidget />
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <TodoList />
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 8 }}>
            <Card shadow="sm" padding="lg" radius="md">
              <ConsulatationLogWidget />
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Card shadow="sm" padding="8" radius="md">
              <Group justify="center">
                <Calendar size="md" />
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Overview;
