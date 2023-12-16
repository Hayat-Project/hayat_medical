import MainHeader from "../MainHeader";
import patientsData from "../../mockdata/patientsData.json";
import { SimpleGrid, Grid } from "@mantine/core";
import { useParams } from "react-router-dom";
import PatientProfileCard from "./PatientProfileCard";
import { useMediaQuery } from "@mantine/hooks";
import PatientInfoCard from "./PatientInfoCard";
import ReportsTable from "./ReportsTabs";

function PatientProfile(props) {
  const { selectedPatientId } = useParams();
  const isMobile = useMediaQuery(`(max-width: 1200px)`);

  const selectedPatient = patientsData.find(
    (patient) => patient.id === selectedPatientId
  );

  if (!selectedPatient) {
    // Handle the case where the patient with the specified ID is not found
    return (
      <div>
        <p>No patient found with ID {selectedPatientId}</p>
      </div>
    );
  }

  return (
    <>
      <MainHeader
        header="Patient Profile"
        type="patients"
        dataSize="10"
        badge={false}
      />
      <Grid mt={15}>
        <Grid.Col span={isMobile ? 12 : 3}>
          <SimpleGrid>
            <PatientProfileCard
              name={selectedPatient.name}
              email={selectedPatient.email}
              avatar={selectedPatient.src}
            />
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid>
            <PatientInfoCard
              id={selectedPatient.id}
              age={selectedPatient.age}
              gender={selectedPatient.gender}
              dob={selectedPatient.dob}
              nationality={selectedPatient.nationality}
              phone={selectedPatient.phone}
              insurance={selectedPatient.insurance}
            />
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 5}>
          <SimpleGrid>
            <ReportsTable />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default PatientProfile;
