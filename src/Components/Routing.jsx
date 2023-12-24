import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "../css/global.css"
import Dashboard from "./Dashboard";
import LandPage from "./LandPage/LandPage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Login from "./LandPage/Login";
import SignUp from "./LandPage/SignUp";
import Messages from "./MessagesView/Messages";
import ConsultationsLog from "./DoctorDashboard/ConsultationsView/ConsultationsLog";
import Overview from "./DoctorDashboard/Overview/Overview";
import Appointments from "./DoctorDashboard/AppointmentsView/Appointments";
import Patients from "./DoctorDashboard/PatientsView/Patients";
import Setting from "./DoctorDashboard/Settings/Setting";
import PatientProfile from "./DoctorDashboard/PatientsView/PatientProfile";
import NewConsultation from "./DoctorDashboard/PatientsView/NewConsultation";
import Users from "./AdminDashboard/Users";
import Departments from "./AdminDashboard/Department/Departments";
import Customization from "./AdminDashboard/Customization";
import Permissions from "./AdminDashboard/Permissions";

function Routing() {

  const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<LandPage/>}>
				<Route path="login" element={<Login/>}/>
				<Route path="signup" element={<SignUp/>}/>
				<Route path="doctorDashboard" element={<Dashboard dashboardSelected="doctor"/>}>
					<Route path="overview" element={<Overview />}/>
					<Route path="Appointments" element={<Appointments />}/>
					<Route path="Patients" element={<Patients />}/>
					<Route path="PatientProfile/:selectedPatientId" element={<PatientProfile />}/>
					<Route path="Patient Profile/New Consultation" element={<NewConsultation />}/>
					<Route path="ConsultationsLog" element={<ConsultationsLog />}/>
					<Route path="Messages" element={<Messages />}/>
					<Route path="Setting" element={<Setting />}/>
				</Route>
				<Route path="adminDashboard" element={<Dashboard dashboardSelected="admin"/>}>
					<Route path="overview" element={<Overview />}/>
					<Route path="Users" element={<Users/>}/>
					<Route path="Departments" element={<Departments/>}/>
					<Route path="Customization" element={<Customization/>}/>
					<Route path="Permissions" element={<Permissions/>}/>
					<Route path="Messages" element={<Messages />}/>
					<Route path="Setting" element={<Setting />}/>
				</Route>
			</Route>
		)
	);

  return (
    <RouterProvider router={router}/>
  );
}

export default Routing;
