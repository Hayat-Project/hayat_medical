import { Input, Button, Grid, PasswordInput } from '@mantine/core';
import { useState } from 'react';
import {useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginDoctor, setloginDoctor] = useState(false);
    const [loginAdmin, setloginAdmin] = useState(false);
    const navigate = useNavigate();
    
    function handleLogin() {
        if(email === "doctor" && password === "doctor")
            setloginDoctor(true);
        else if (email === "admin" && password === "admin")
            setloginAdmin(true);
    }

    return (
        <>
            <Grid mt={200}>
                <Grid.Col span={4}></Grid.Col>
                <Grid.Col span={4}>
                    <Input.Wrapper label="Email" withAsterisk >
                        <Input
                            size="md" 
                            placeholder="Email..."
                            onChange={(event) =>
                            setEmail(event.currentTarget.value)
                            }
                        />
                    </Input.Wrapper>
                    <Input.Wrapper label="Password" withAsterisk >
                         <PasswordInput
                            size="md" 
                            placeholder="Password..."
                            onChange={(event) =>
                            setPassword(event.currentTarget.value)
                            }
                            />
                    </Input.Wrapper>
                    <Button mt={15} onClick={handleLogin}>Login</Button>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>
            </Grid>

            {loginDoctor && navigate('/doctorDashboard')}
            {loginAdmin && navigate('/adminDashboard')}
        </>
    );
}

export default Login;