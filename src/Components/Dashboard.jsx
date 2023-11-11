import { useDisclosure } from '@mantine/hooks';
import { AppShell } from '@mantine/core';
import Header from './Header';
import Navbar from './Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ConsultationsLog from './ConsultationsLog';
import Overview from './Overview';
import Appointments from './Appointments';
import Patients from './Patients';
import Messages from './Messages';
import Setting from './Setting';

function Dashboard() {
	const [opened, { toggle }] = useDisclosure();


	return (
		<BrowserRouter>
			<AppShell
				header={{ height: 60 }}
				navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
				padding="md"
			>

				<Header toggle={toggle} opened={opened} />

				<Navbar/>

				<AppShell.Main>
					<Routes>
						<Route path="/Overview" element={<Overview />} />
						<Route path="/Appointments" element={<Appointments />} />
						<Route path="/Patients" element={<Patients />} />
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