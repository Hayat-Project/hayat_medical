import { useDisclosure } from '@mantine/hooks';
import { AppShell } from '@mantine/core';
import Header from './Header';
import Navbar from './Navbar';

function Dashboard() {
	const [opened, { toggle }] = useDisclosure();


	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding="md"
		>

			<Header toggle={toggle} opened={opened} />

			<Navbar/>
			<AppShell.Main>
				Main
			</AppShell.Main>

		</AppShell>
	);
}

export default Dashboard;