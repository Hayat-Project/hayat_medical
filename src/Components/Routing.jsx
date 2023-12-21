import { AppShell } from "@mantine/core";
import { Routes, Route} from "react-router-dom";
import ConsultationsLog from "./ConsultationsView/ConsultationsLog";
import Overview from "./Overview/Overview";
import Appointments from "./AppointmentsView/Appointments";
import Patients from "./PatientsView/Patients";
import Messages from "./Messages";
import Setting from "./Settings/Setting";
import PatientProfile from "./PatientsView/PatientProfile";
import NewConsultation from "./PatientsView/NewConsultation";



function Routing(props) {

  const doctorRoutes = [
    { path: "/", element: <Overview /> },
    { path: "/Appointments", element: <Appointments /> },
    { path: "/Patients", element: <Patients /> },
    { path: "/Patients/Patient Profile/:selectedPatientId", element: <PatientProfile /> },
    { path: "/Patients/Patient Profile/New Consultation", element: <NewConsultation /> },
    { path: "/ConsultationsLog", element: <ConsultationsLog /> },
    { path: "/Messages", element: <Messages /> },
    { path: "/Setting", element: <Setting /> },
  ];

  const adminRoutes = [
    { path: "/", element: <Overview /> },
    { path: "/Users", element: <Appointments /> },
    { path: "/Departments", element: <Patients /> },
    { path: "/Customization", element: <ConsultationsLog /> },
    { path: "/Permission", element: <ConsultationsLog /> },
    { path: "/Messages", element: <Messages /> },
    { path: "/Setting", element: <Setting /> },
  ];

  let dashboard;
  switch (props.selectDashboard) {
    case 'doctor':
      dashboard = doctorRoutes;
      break;
    case 'admin':
      dashboard = adminRoutes;
      break;
  }
console.log("Route " + dashboard);
console.log("Route " + props.selectDashboard);
  return (
    <AppShell.Main>
      <Routes>
        {dashboard.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </AppShell.Main>
  );
}

export default Routing;
