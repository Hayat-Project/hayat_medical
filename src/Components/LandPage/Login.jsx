import { Input, Button, Grid, PasswordInput } from '@mantine/core';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email);
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
                            setEmail(event.currentTarget.value)
                            }
                            />
                    </Input.Wrapper>
                    <Button mt={15} >Login</Button>
                </Grid.Col>
                <Grid.Col span={4}></Grid.Col>
            </Grid>
        </>
    );
}

export default Login;