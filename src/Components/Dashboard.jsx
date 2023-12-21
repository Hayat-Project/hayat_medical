import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import Header from "./Header";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ConsultationsLog from "./ConsultationsView/ConsultationsLog";
import Overview from "./Overview/Overview";
import Appointments from "./AppointmentsView/Appointments";
import Patients from "../Components/PatientsView/Patients";
import Messages from "././MessagesView/Messages";
import Setting from "./Settings/Setting";
import PatientProfile from "./PatientsView/PatientProfile";
import NewConsultation from "./PatientsView/NewConsultation";
import Routing from "./Routing";

function Dashboard(props) {
  const [opened, { toggle }] = useDisclosure();
  const dashboard = props.dashboardSelected

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

        <Navbar selectNavbar={dashboard}/>

        <Routing selectDashboard={dashboard}/>

      </AppShell>
    </BrowserRouter>
  );
}

export default Dashboard;
