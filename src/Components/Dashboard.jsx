import { useDisclosure } from '@mantine/hooks';
import { AppShell } from '@mantine/core';
import Header from './Header';

export function Dashboard() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >

      <Header toggle={toggle} opened={opened}/>
		
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}