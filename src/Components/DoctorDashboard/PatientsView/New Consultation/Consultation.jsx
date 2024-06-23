import { Grid } from "@mantine/core";
import ConsultaionSteps from "./ConsultaionSteps";
import { useParams } from "react-router-dom";

function Consultation() {
  const { selectedPatientId } = useParams();
  console.log(selectedPatientId);
  return (
    <>
      <Grid mt={10}>
        <Grid.Col span={1}> </Grid.Col>
        <Grid.Col span={10}>
          <ConsultaionSteps patientID={selectedPatientId} />
        </Grid.Col>
        <Grid.Col span={1}> </Grid.Col>
      </Grid>
    </>
  );
}

export default Consultation;
