import { useDisclosure } from "@mantine/hooks";
import { AppShell, Group, Button } from "@mantine/core";
import { useState, useEffect } from "react";
import ThemeSwitcher from "../ThemeSwitcher.jsx";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from '@mantine/hooks';
import HayatLogo from "../HayatLogo.jsx";


function LandPage() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const [logoSrc, setLogoSrc] = useState("/Logo.png");

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setLogoSrc(storedTheme === 'dark' ? "/Logo-dark.png" : "/Logo.png");
    } else {
      const theme = document.documentElement.getAttribute('data-mantine-color-scheme');
      setLogoSrc(theme === 'dark' ? "/Logo-dark.png" : "/Logo.png");
    }
  }, []);

  const handleThemeChange = () => {
    const theme = document.documentElement.getAttribute('data-mantine-color-scheme');
    setLogoSrc(theme === 'dark' ? "/Logo-dark.png" : "/Logo.png");
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <HayatLogo image={logoSrc} />
          <Group gap={isMobile ? 8 : "md"}>
            <ThemeSwitcher onChange={handleThemeChange} />
            <Button variant="light" component={Link} to="login">Login</Button>
            <Button variant="filled" component={Link} to="signup">Sign Up</Button>
          </Group>
        </Group>
      </AppShell.Header>

      <Outlet />

    </AppShell>
  );
}

export default LandPage;