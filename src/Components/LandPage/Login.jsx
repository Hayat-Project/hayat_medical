import { Input, Button, Grid, PasswordInput, Title, Space, Group, Card, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../../Config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useUserAuth } from '../../Context/UserAuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { login } = useUserAuth();
    const isMobile = useMediaQuery(`(max-width: 1200px)`);
    const navigate = useNavigate();

    const signIn = async () => {
        try {
            if (!email || !password) return;
            await login(email, password);
            navigate('/doctorDashboard/overview');
        } catch (err){
            console.log(err)
            setError(true);
        }
    }

    return (
        <>
            <Grid mt={200}>
                <Grid.Col span={isMobile ? 1 : 4.5}></Grid.Col>
                <Grid.Col span={isMobile ? 10 : 3}>
                    <Card shadow="sm" withBorder radius="md">
                        <Title order={2}>Login</Title>
                        <Space h="xl" />
                        <Text c="red">{error ? "Invalid email or password" : null}</Text>
                        <Input.Wrapper label="Email" withAsterisk >
                            <Input
                                size="lg"
                                placeholder="Email..."
                                onChange={(event) =>
                                    setEmail(event.currentTarget.value)
                                }
                            />
                        </Input.Wrapper>
                        <Space h="lg" />
                        <Input.Wrapper label="Password" withAsterisk >
                            <PasswordInput
                                size="lg"
                                placeholder="Password..."
                                onChange={(event) =>
                                    setPassword(event.currentTarget.value)
                                }
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
        </>
    );
}

export default Login;