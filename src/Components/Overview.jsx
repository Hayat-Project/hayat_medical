import { Flex, Grid, Skeleton, Card, Group } from "@mantine/core";
import MainHeader from "./MainHeader";
import ConsulatationLogWidget from "./ConsultationsView/ConsultationLogWidget";
const child = <Skeleton height={140} radius="md" animate={false} />;

function Overview() {
  function viewFivePaient() {}

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
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <Card shadow="sm" padding="lg" radius="md">
              <ConsulatationLogWidget />
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}></Grid.Col>
          <Grid.Col span={{ base: 12, xs: 12 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 12 }}>{child}</Grid.Col>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Overview;
