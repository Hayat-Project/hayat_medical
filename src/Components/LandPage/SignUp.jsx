import { useState } from 'react';
import { Stepper, Button, Group, Grid, Center, Stack, Title, PasswordInput, Input, Space } from '@mantine/core';
import { IMaskInput } from 'react-imask';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { DateInput } from '@mantine/dates';


function SignUp() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const [visible, { toggle }] = useDisclosure(false);
    const [value, setValue] = useState(null);
    const isMobile = useMediaQuery(`(max-width: 1200px)`);

    return (
        <>
            <Grid mt={100}>
                <Grid.Col span={isMobile ? 12 : 3}></Grid.Col>
                <Grid.Col span={isMobile ? 12 : 6}>
                    <Stepper active={active} iconSize={isMobile ? 15 : 37} size={isMobile ? 11 : "lg"}>
                        <Stepper.Step label="First step" description="Patient Information">
                            <Grid>
                                <Grid.Col span={isMobile ? 12 : 3}></Grid.Col>
                                <Grid.Col span={isMobile ? 12 : 3}>
                                    <Input.Wrapper label="First Name" withAsterisk >
                                        <Input size="md" placeholder="First Name..." />
                                    </Input.Wrapper>
                                    <Space h="md" />
                                    <Input.Wrapper label="Email" withAsterisk >
                                        <Input size="md" placeholder="Email..." />
                                    </Input.Wrapper>
                                    <Space h="md" />
                                    <Input.Wrapper label="Contact Number" withAsterisk >
                                        <Input component={IMaskInput} size="md" mask="+971 (000) 0000-000" placeholder="Contact Number..." />
                                    </Input.Wrapper>
                                    <Space h="md" />
                                    <Input.Wrapper label="Date Of Birth" withAsterisk >
                                        <DateInput
                                            value={value}
                                            onChange={setValue}
                                            placeholder="Date of birth..."
                                            size='md'
                                        />
                                    </Input.Wrapper>
                                </Grid.Col>
                                <Grid.Col span={isMobile ? 12 : 3}>
                                    <Input.Wrapper label="Last Name" withAsterisk >
                                        <Input size="md" placeholder="Last Name..." />
                                    </Input.Wrapper>
                                    <Space h="md" />
                                    <Input.Wrapper label="Emirates ID" withAsterisk >
                                        <Input component={IMaskInput} size="md" mask="000-000-0000000-0" placeholder="Emirates ID..." />
                                    </Input.Wrapper>
                                    <Space h="md" />
                                    <Input.Wrapper label="Emergency Contact" >
                                        <Input component={IMaskInput} size="md" mask="+971 (000) 0000-000" placeholder="Emergency Contact..." />
                                    </Input.Wrapper>
                                    <Space h="md" />
                                    <Input.Wrapper label="Gender" withAsterisk >
                                        <Input
                                            component="select"
                                            rightSection={<IconChevronDown size={14} stroke={1.5} />}
                                            size='md'

                                        >
                                            <option value="1">None</option>
                                            <option value="2">Male</option>
                                            <option value="3">Female</option>
                                        </Input>
                                    </Input.Wrapper>
                                </Grid.Col>
                            </Grid>
                        </Stepper.Step>
                        <Stepper.Step label="Second step" description="Create Password">
                            <Grid>
                                <Grid.Col span={isMobile ? 12 : 3}></Grid.Col>
                                <Grid.Col span={isMobile ? 12 : 3}>
                                    <PasswordInput
                                        label="Password"
                                        placeholder="Password.."
                                        visible={visible}
                                        onVisibilityChange={toggle}
                                        withAsterisk
                                    />
                                </Grid.Col>
                                <Grid.Col span={isMobile ? 12 : 3}>
                                    <PasswordInput
                                        label="Confirm password"
                                        placeholder="Password.."
                                        visible={visible}
                                        onVisibilityChange={toggle}
                                        withAsterisk
                                    />
                                </Grid.Col>
                            </Grid>
                        </Stepper.Step>
                        <Stepper.Step label="Final step" description="Health Information">
                            <Grid>
                                <Grid.Col span={isMobile ? 12 : 3}></Grid.Col>
                                <Grid.Col span={isMobile ? 12 : 3}>
                                    <Input.Wrapper label="Insurance Type" withAsterisk >
                                        <Input size="md" placeholder="Insurance Type..." />
                                    </Input.Wrapper>
                                    <Space h="md" />
                                    <Input.Wrapper label="Allergies" withAsterisk >
                                        <Input size="md" placeholder="Allergies..." />
                                    </Input.Wrapper>
                                </Grid.Col>
                                <Grid.Col span={isMobile ? 12 : 3}>
                                    <Input.Wrapper label="Blood Type" withAsterisk >
                                        <Input
                                            component="select"
                                            rightSection={<IconChevronDown size={14} stroke={1.5} />}
                                            size='md'

                                        >
                                            <option value="1">None</option>
                                            <option value="2">A-</option>
                                            <option value="3">A+</option>
                                            <option value="4">B-</option>
                                            <option value="5">B+</option>
                                            <option value="6">O-</option>
                                            <option value="7">O+</option>
                                            <option value="8">AB-</option>
                                            <option value="9">AB+</option>
                                        </Input>
                                    </Input.Wrapper>
                                    <Space h="md" />
                                    <Input.Wrapper label="Additional Note">
                                        <Input size="md" placeholder="Additional Note..." />
                                    </Input.Wrapper>
                                </Grid.Col>
                            </Grid>
                        </Stepper.Step>
                        <Stepper.Completed>
                            <Center>
                                <Title size={isMobile ? 13 : 30} order={2}>Completed, account has been created successfully!</Title>
                            </Center>
                        </Stepper.Completed>
                    </Stepper>

                    <Group justify="center" mt="xl">
                        <Button variant="default" onClick={prevStep}>Back</Button>
                        <Button onClick={nextStep}>Next step</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </>
    );
}
export default SignUp;
