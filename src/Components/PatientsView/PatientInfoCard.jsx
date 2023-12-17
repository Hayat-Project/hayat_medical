import {
  Card,
  Grid,
  SimpleGrid,
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import TextComponent from "./TextComponent";

function PatientInfoCard(props) {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  return (
    <Card shadow="sm" withBorder>
      <Grid>
        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid>
            <TextComponent header="ID" text={props.id} />
            <TextComponent header="Age" text={props.age} />
            <TextComponent header="Insurance" text={props.insurance} />
            <TextComponent header="Allergies" text={props.allergies} />
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid>
            <TextComponent header="Gender" text={props.gender} />
            <TextComponent header="Nationality Day" text={props.nationality} />
            <TextComponent
              header="Last Appointment"
              text={props.lastAppointment}
            />
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid>
            <TextComponent header="Birth Day" text={props.dob} />
            <TextComponent header="Mobile Number" text={props.phone} />
            <TextComponent header="National ID" text={props.nationalid} />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default PatientInfoCard;
