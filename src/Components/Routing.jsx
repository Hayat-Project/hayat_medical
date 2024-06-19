import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import Dashboard from "./Dashboard";
import LandPage from "./LandPage/LandPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./LandPage/Login";
import ConsultationsLog from "./DoctorDashboard/ConsultationsView/ConsultationsLog";
import Overview from "./DoctorDashboard/Overview/Overview";
import Appointments from "./DoctorDashboard/AppointmentsView/Appointments";
import Patients from "./DoctorDashboard/PatientsView/Patients";
import PatientProfile from "./DoctorDashboard/PatientsView/PatientProfile";
import NewConsultation from "./DoctorDashboard/PatientsView/NewConsultation";
import DoctorSettings from "./DoctorDashboard/Settings/DoctorSettings";
import ProtectedRoute from "./ProtectedRoute";

function Routing() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandPage />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route
          path="doctorDashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="overview" element={<Overview />} />
          <Route path="Appointments" element={<Appointments />} />
          <Route path="Patients" element={<Patients />} />
          <Route
            path="PatientProfile/:selectedPatientId"
            element={<PatientProfile />}
          />
          <Route
            path="Patient Profile/New Consultation"
            element={<NewConsultation />}
          />
          <Route path="ConsultationsLog" element={<ConsultationsLog />} />
          <Route path="Setting" element={<DoctorSettings />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routing;
