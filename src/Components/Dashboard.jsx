import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import Header from "./Header";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";


function Dashboard(props) {
  const [opened, { toggle }] = useDisclosure();
  const dashboard = props.dashboardSelected

  return (
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

      <Navbar selectNavbar={dashboard} />

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

    </AppShell>
  );
}

export default Dashboard;
