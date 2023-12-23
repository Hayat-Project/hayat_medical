import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Button  } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";

function LandPage(){
    const [opened, { toggle }] = useDisclosure();
    const [login, setLogin] = useState(true);
    const [signUp, setSignUp] = useState(false);

    function handLeLogin(){
        setLogin(true);
        setSignUp(false);
    }

    function handSignUp(){
        setSignUp(true);
        setLogin(false);
    }
    
    return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
          <Group visibleFrom="xs">
            <Button variant="light" onClick={handLeLogin}>Login</Button>
            <Button variant="filled" onClick={handSignUp}>Sign Up</Button> 
        </Group>
        </Group>
      </AppShell.Header>

        {login && <Login/>}
        {signUp && <SignUp/>}
    </AppShell>
  );
}

export default LandPage;