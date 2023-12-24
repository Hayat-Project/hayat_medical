import { AppShell } from "@mantine/core";
import { Routes, Route} from "react-router-dom";
import ConsultationsLog from "./DoctorDashboard/ConsultationsView/ConsultationsLog";
import Overview from "./DoctorDashboard/Overview/Overview";
import Appointments from "./DoctorDashboard/AppointmentsView/Appointments";
import Patients from "./DoctorDashboard/PatientsView/Patients";
import Messages from "../Components/MessagesView/Messages"
import Setting from "./DoctorDashboard/Settings/Setting";
import PatientProfile from "./DoctorDashboard/PatientsView/PatientProfile";
import NewConsultation from "./DoctorDashboard/PatientsView/NewConsultation";
import Users from "./AdminDashboard/UsersView/Users";
import Departments from "./AdminDashboard/Departments";
import Customization from "./AdminDashboard/Customization";
import Permissions from "./AdminDashboard/Permissions";



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
    { path: "/Users", element: <Users/> },
    { path: "/Departments", element: <Departments/> },
    { path: "/Customization", element: <Customization/>},
    { path: "/Permission", element: <Permissions/> },
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
