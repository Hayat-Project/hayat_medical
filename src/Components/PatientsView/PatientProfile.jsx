import MainHeader from "../MainHeader";

function PatientProfile(props) {
  return (
    <>
      <MainHeader
        header="Patients"
        subheader="View Your Patients!"
        type="patients"
        dataSize="10"
      />
    </>
  );
}

export default PatientProfile;
