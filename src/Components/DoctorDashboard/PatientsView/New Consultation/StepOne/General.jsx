import { useState, useEffect } from "react";
import { Select, Grid, Title, Space, Loader } from "@mantine/core";
import ReportsTabs from "../../ReportsTabs";
import { ref, listAll } from "firebase/storage"; 
import { storage } from "../../../../../../functions/firebase"; 

function General({ onImageLabelChange, patientID }) {
  const [value, setValue] = useState("");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("PatientID from General: ", patientID);
  const handleImageLabelChange = (value) => {
    setValue(value); 
    onImageLabelChange(value);
  };

  useEffect(() => {
    const fetchReportImages = async () => {
      setLoading(true);
      if (!patientID) {
        console.warn("No patient ID provided");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/patients/${patientID}/radiological-images`);
        const data = await response.json();
        const cleanedData = data.map(item => ({
          ...item,
          reportName: item.reportName.replace(/\.[^/.]+$/, ""), 
        }));
        setReports(cleanedData);
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
          <ReportsTabs patientID={patientID} />
        </Grid.Col>
        <Grid.Col span={5}>
          {loading ? (
            <Loader /> 
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
                data={reports.map((report) => report.reportName)}
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
