import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ConsultationsLog from "./ConsultationsView/ConsultationsLog";
import Overview from "./Overview/Overview";
import Appointments from "./AppointmentsView/Appointments";
import Patients from "../Components/PatientsView/Patients";
import Messages from "./Messages";
import Setting from "./Settings/Setting";
import PatientProfile from "./PatientsView/PatientProfile";
import NewConsultation from "./PatientsView/NewConsultation";

function Dashboard() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <BrowserRouter>
      <AppShell
        padding="md"
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
      >
        <Header toggle={toggle} opened={opened} />

        <Navbar />

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/Patients" element={<Patients />} />
            <Route
              path="/Patients/Patient Profile/:selectedPatientId"
              element={<PatientProfile />}
            />
            <Route
              path="/Patients/Patient Profile/New Consultation"
              element={<NewConsultation />}
            />
            <Route path="/Consultationslog" element={<ConsultationsLog />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Setting" element={<Setting />} />
            {/* <Route path="/Logout" element={<ConsultationsLog />} /> */}
          </Routes>
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  );
}

export default Dashboard;
