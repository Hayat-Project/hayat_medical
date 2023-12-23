import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./css/global.css"
import { MantineProvider, createTheme, Button, Group } from "@mantine/core";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";
import LandPage from "./Components/LandPage/LandPage";

function App() {
	const [adminDashboard, setAdminDashboard] = useState(false);
	const [doctorDashboard, setDoctorDashboard] = useState(false);

	function openAdmin(){
		setAdminDashboard(true);
		setDoctorDashboard(false);
	}

	function openDoctor(){
		setDoctorDashboard(true);
		setAdminDashboard(false);
	}
	const theme = createTheme({
		defaultRadius: "md",
		
		components: {
			Button: Button.extend({
				defaultProps: {
					color: "blue.8",
				},
			}),
		},
	});

	return (
		<MantineProvider theme={theme}>
			{/* <Group>
				<Button variant="filled" onClick={openDoctor}>Doctor Dashboard</Button>
				<Button variant="filled" onClick={openAdmin}>Admin Dashboard</Button>
			</Group>
			
			{doctorDashboard && <Dashboard dashboardSelected="doctor"/>}
			{adminDashboard && <Dashboard dashboardSelected="admin"/>} */}
			<LandPage/>
		</MantineProvider>
	);
}

export default App;
