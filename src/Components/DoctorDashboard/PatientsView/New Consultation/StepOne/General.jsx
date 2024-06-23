import { Select, Grid, Title, Space } from "@mantine/core";
import ReportsTabs from "../../ReportsTabs";
import { useState } from "react";

function General({ onImageLabelChange }) {
  const [value, setValue] = useState("");

  const handleImageLabelChange = (value) => {
    // const selectedValue = event.target.value;
    console.log(value); // Log the selected value for debugging
    setValue(value); // Update the local state with the selected value
    onImageLabelChange(value); // Pass the selected value to the parent component
  };

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
              data={["Brain"]} // Only one option "Brain" as per your example
              value={value}
              onChange={(value) => handleImageLabelChange(value)}
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
