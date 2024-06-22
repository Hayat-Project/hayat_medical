import { Select, Grid, Title, Space } from "@mantine/core";
import ReportsTabs from "../../ReportsTabs";

function General() {
  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <Title size="h3" mb={5}>
            Radiological Images
          </Title>
          <Space h="lg" />
          <ReportsTabs />
        </Grid.Col>
        <Grid.Col span={5}>
          <form>
            <Title size="h3" mb={5}>
              General
            </Title>
            <Space h="lg" />
            <Select
              withAsterisk={true}
              label="Radiological Image"
              w={350}
              placeholder="Pick value"
              defaultValue="None"
              data={["None", "Pollen", "Dust", "Peanuts", "Penicillin"]}
              searchable
            />
            <Space h="md" />
            <Select
              label="Allergy"
              w={350}
              placeholder="Pick value"
              defaultValue="None"
              data={["None", "Pollen", "Dust", "Peanuts", "Penicillin"]}
              searchable
            />
          </form>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default General;
