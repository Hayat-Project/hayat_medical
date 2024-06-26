import React, { useState } from "react";
import {
  Input,
  Button,
  Grid,
  PasswordInput,
  Title,
  Space,
  Group,
  Card,
  Text,
  AppShell,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../functions/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserAuth } from "../../Context/UserAuthContext";
import Mfa from "./Mfa";
import HayatLogo from "../HayatLogo";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useUserAuth();
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const navigate = useNavigate();
  const [mfa, setMfa] = useState(true);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // navigate("/doctorDashboard/overview/");
      Cookies.set("email", email);
      setMfa(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppShell header={{ height: 70 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <HayatLogo image="/images/Logo.png" />
          <Group gap={isMobile ? 8 : "md"}>
            <Button variant="light" component={Link} to="/">
              Home
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      {mfa ? (
        <Grid mt={200}>
          <Grid.Col span={isMobile ? 1 : 4.5}></Grid.Col>
          <Grid.Col span={isMobile ? 10 : 3}>
            <Card shadow="sm" withBorder radius="md">
              <Title order={2}>Login</Title>
              <Space h="xl" />
              <Text c="red">{error ? "Invalid email or password" : null}</Text>
              <Input.Wrapper label="Email" withAsterisk>
                <Input
                  size="lg"
                  placeholder="Email..."
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
              </Input.Wrapper>
              <Space h="lg" />
              <Input.Wrapper label="Password" withAsterisk>
                <PasswordInput
                  size="lg"
                  placeholder="Password..."
                  onChange={(event) => setPassword(event.currentTarget.value)}
                />
              </Input.Wrapper>
              <Space h="xl" />
              <Group gap="lg" justify="space-between">
                <Button onClick={signIn}>Login</Button>
                <Button variant="subtle">FORGET PASSWORD?</Button>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
       ) : (
        <Mfa />
      )} 
    </AppShell>
  );
}

export default Login;
