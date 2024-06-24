import MainHeader from '../../MainHeader'
import { SimpleGrid, Grid } from "@mantine/core";
import { useLocation } from "react-router-dom";
import PatientProfileCard from "./PatientProfileCard";
import { useMediaQuery } from "@mantine/hooks";
import PatientInfoCard from "./PatientInfoCard";
import ReportsTabs from "./ReportsTabs";

import AppointmentHistoryTabs from "./AppointmentHistoryTabs";

function PatientProfile() {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);

  const location = useLocation();
  const selectedPatient = location.state.patient;

  if (!selectedPatient) {
    return (
      <div>
        <p>No patient found with ID {selectedPatient.id}</p>
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
        <Grid.Col span={isMobile ? 12 : 2}>
          <SimpleGrid>
            <PatientProfileCard
              name={selectedPatient.name}
              email={selectedPatient.email}
              avatar={selectedPatient.profilePicture}
            />
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 5}>
          <SimpleGrid>
            <PatientInfoCard
              id={selectedPatient.id}
              age={selectedPatient.age}
              gender={selectedPatient.gender}
              dob={selectedPatient.dob}
              nationality={selectedPatient.nationality}
              phone={selectedPatient.phone}
              insurance={selectedPatient.insurance}
              lastAppointment={selectedPatient.lastAppointment}
              allergies={selectedPatient.allergies}
              nationalid={selectedPatient.nationalid}
            />
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 5}>
          <SimpleGrid>
            <ReportsTabs height={263} patientID={selectedPatient.id} />
          </SimpleGrid>
        </Grid.Col>
      </Grid>

      <Grid mt={15}>
        <Grid.Col span={isMobile ? 12 : 12}>
          <SimpleGrid>
            <AppointmentHistoryTabs patientID={selectedPatient.id}/>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default PatientProfile;
