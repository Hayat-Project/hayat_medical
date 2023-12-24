import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Button  } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher.jsx";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from '@mantine/hooks';


function LandPage(){
    const [opened, { toggle }] = useDisclosure();
    const [isDarkMode, setChecked] = useState(false);
    const isMobile = useMediaQuery(`(max-width: 1200px)`);
    
    return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <MantineLogo size={30} />
          <Group gap={isMobile ? 8 : "md"}>
            <ThemeSwitcher
              onChange={(event) => setChecked(event.currentTarget.isDarkMode)}
              isDarkMode={isDarkMode} 
            />
            <Button variant="light" component={Link} to="login">Login</Button>
            <Button variant="filled" component={Link} to="signup">Sign Up</Button> 
          </Group>
        </Group>
      </AppShell.Header>

      <Outlet/>
      
    </AppShell>
  );
}

export default LandPage;