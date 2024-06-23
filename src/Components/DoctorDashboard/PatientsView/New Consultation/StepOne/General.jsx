import { useState, useEffect } from "react";
import { Select, Grid, Title, Space, Loader } from "@mantine/core";
import ReportsTabs from "../../ReportsTabs";
import { ref, listAll } from "firebase/storage"; // Import Storage SDK methods
import { storage } from "/src/Config/firebase.js"; // Assuming storage is your Firebase Storage instance

function General({ onImageLabelChange, patientID }) {
  const [value, setValue] = useState("");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleImageLabelChange = (value) => {
    console.log(value); // Log the selected value for debugging
    setValue(value); // Update the local state with the selected value
    onImageLabelChange(value); // Pass the selected value to the parent component
  };

  useEffect(() => {
    const fetchReportImages = async () => {
      try {
        const storageRef = ref(storage, `Radiological Image/${patientID}`);
        const listResult = await listAll(storageRef);
        const reportPromises = listResult.items.map(async (item) => {
          return {
            reportName: item.name.replace(/\.[^/.]+$/, ""),
          };
        });
        const fetchedReports = await Promise.all(reportPromises);
        setReports(fetchedReports);
      } catch (error) {
        console.error("Error fetching report images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportImages();
  }, [patientID]);

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <Title size="h3" mb={5}>
            Radiological Images
          </Title>
          <Space h="lg" />
          <ReportsTabs PatientID={patientID} />
        </Grid.Col>
        <Grid.Col span={5}>
          {loading ? (
            <Loader /> // Show loader while fetching data
          ) : (
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
                data={reports.map((report) => report.reportName)} // Use fetched report names
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
          )}
        </Grid.Col>
      </Grid>
    </>
  );
}

export default General;
