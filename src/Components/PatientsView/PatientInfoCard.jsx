import React from "react";
import {
  Text,
  Group,
  Avatar,
  Stack,
  Button,
  Card,
  Grid,
  SimpleGrid,
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import TextCompounant from "./TextCompounant";

function PatientInfoCard(props) {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Grid>
        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid>
            <TextCompounant header="ID" text={props.id} />
            <TextCompounant header="Age" text={props.age} />
            <TextCompounant header="Insurance" text={props.insurance} />
            <TextCompounant header="Allergies" text="No Known Allergies" />
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid verticalSpacing="sm">
            <TextCompounant header="Gender" text={props.gender} />
            <TextCompounant header="Nationality Day" text={props.nationality} />
            <TextCompounant header="???" text={props.phone} />
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid verticalSpacing="sm">
            <TextCompounant header="Birth Day" text={props.dob} />
            <TextCompounant header="Mobile Number" text={props.phone} />
            <TextCompounant header="???" text={props.phone} />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default PatientInfoCard;
