import { Grid } from "@mantine/core";
import ConsultaionSteps from "./ConsultaionSteps";
function Consultation() {
  return (
    <>
      <Grid mt={10}>
        <Grid.Col span={1}> </Grid.Col>
        <Grid.Col span={10}>
          <ConsultaionSteps />
        </Grid.Col>
        <Grid.Col span={1}> </Grid.Col>
      </Grid>
    </>
  );
}

export default Consultation;
