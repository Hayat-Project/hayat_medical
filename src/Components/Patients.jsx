import { Card, Image, Text, Badge, Button, Group, Grid, Avatar, Stack } from '@mantine/core';

const data = {
    name: 'Khaled Albaz',
    id: '253735',
    dob: '23 June 2003',
    age: '20',
    gender: 'Male',
    nationality: 'Palestine',
    src: 'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
}

function Patients() {
    // const { name, id, dob, age, gender, nationality } = data;
    return (
        <Grid grow>
            <Grid.Col span={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify='center'>
                        <Card.Section>
                            <Avatar size={70} src={data.src}/>
                        </Card.Section>
                    </Group>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="lg">
                            {data.name}
                        </Text>
                    </Group>
                    <Group mt="md" mb="xs">
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            gap="xs"
                        >
                            <Text size="sm">
                                <b>ID</b>: {data.id}
                            </Text>
                            <Text size="sm">
                                <b>DOB</b>: {data.dob}
                            </Text>
                            <Text size="sm">
                                <b>Age</b>: {data.age}
                            </Text>
                            <Text size="sm">
                                <b>Gender</b>: {data.gender}
                            </Text>
                            <Text size="sm">
                                <b>Nationality</b>: {data.nationality}
                            </Text>
                        </Stack>
                    </Group>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        View Patient
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify='center'>
                        <Card.Section>
                            <Avatar size={70} src={data.src}/>
                        </Card.Section>
                    </Group>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="lg">
                            {data.name}
                        </Text>
                    </Group>
                    <Group mt="md" mb="xs">
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            gap="xs"
                        >
                            <Text size="sm">
                                <b>ID</b>: {data.id}
                            </Text>
                            <Text size="sm">
                                <b>DOB</b>: {data.dob}
                            </Text>
                            <Text size="sm">
                                <b>Age</b>: {data.age}
                            </Text>
                            <Text size="sm">
                                <b>Gender</b>: {data.gender}
                            </Text>
                            <Text size="sm">
                                <b>Nationality</b>: {data.nationality}
                            </Text>
                        </Stack>
                    </Group>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        View Patient
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify='center'>
                        <Card.Section>
                            <Avatar size={70} src={data.src}/>
                        </Card.Section>
                    </Group>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="lg">
                            {data.name}
                        </Text>
                    </Group>
                    <Group mt="md" mb="xs">
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            gap="xs"
                        >
                            <Text size="sm">
                                <b>ID</b>: {data.id}
                            </Text>
                            <Text size="sm">
                                <b>DOB</b>: {data.dob}
                            </Text>
                            <Text size="sm">
                                <b>Age</b>: {data.age}
                            </Text>
                            <Text size="sm">
                                <b>Gender</b>: {data.gender}
                            </Text>
                            <Text size="sm">
                                <b>Nationality</b>: {data.nationality}
                            </Text>
                        </Stack>
                    </Group>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        View Patient
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify='center'>
                        <Card.Section>
                            <Avatar size={70} src={data.src}/>
                        </Card.Section>
                    </Group>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="lg">
                            {data.name}
                        </Text>
                    </Group>
                    <Group mt="md" mb="xs">
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            gap="xs"
                        >
                            <Text size="sm">
                                <b>ID</b>: {data.id}
                            </Text>
                            <Text size="sm">
                                <b>DOB</b>: {data.dob}
                            </Text>
                            <Text size="sm">
                                <b>Age</b>: {data.age}
                            </Text>
                            <Text size="sm">
                                <b>Gender</b>: {data.gender}
                            </Text>
                            <Text size="sm">
                                <b>Nationality</b>: {data.nationality}
                            </Text>
                        </Stack>
                    </Group>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        View Patient
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify='center'>
                        <Card.Section>
                            <Avatar size={70} src={data.src} />
                        </Card.Section>
                    </Group>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="lg">
                            {data.name}
                        </Text>
                    </Group>
                    <Group mt="md" mb="xs">
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            gap="xs"
                        >
                            <Text size="sm">
                                <b>ID</b>: {data.id}
                            </Text>
                            <Text size="sm">
                                <b>DOB</b>: {data.dob}
                            </Text>
                            <Text size="sm">
                                <b>Age</b>: {data.age}
                            </Text>
                            <Text size="sm">
                                <b>Gender</b>: {data.gender}
                            </Text>
                            <Text size="sm">
                                <b>Nationality</b>: {data.nationality}
                            </Text>
                        </Stack>
                    </Group>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        View Patient
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify='center'>
                        <Card.Section>
                            <Avatar size={70} src={data.src}/>
                        </Card.Section>
                    </Group>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="lg">
                            {data.name}
                        </Text>
                    </Group>
                    <Group mt="md" mb="xs">
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            gap="xs"
                        >
                            <Text size="sm">
                                <b>ID</b>: {data.id}
                            </Text>
                            <Text size="sm">
                                <b>DOB</b>: {data.dob}
                            </Text>
                            <Text size="sm">
                                <b>Age</b>: {data.age}
                            </Text>
                            <Text size="sm">
                                <b>Gender</b>: {data.gender}
                            </Text>
                            <Text size="sm">
                                <b>Nationality</b>: {data.nationality}
                            </Text>
                        </Stack>
                    </Group>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        View Patient
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify='center'>
                        <Card.Section>
                            <Avatar size={70} src={data.src}/>
                        </Card.Section>
                    </Group>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="lg">
                            {data.name}
                        </Text>
                    </Group>
                    <Group mt="md" mb="xs">
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            gap="xs"
                        >
                            <Text size="sm">
                                <b>ID</b>: {data.id}
                            </Text>
                            <Text size="sm">
                                <b>DOB</b>: {data.dob}
                            </Text>
                            <Text size="sm">
                                <b>Age</b>: {data.age}
                            </Text>
                            <Text size="sm">
                                <b>Gender</b>: {data.gender}
                            </Text>
                            <Text size="sm">
                                <b>Nationality</b>: {data.nationality}
                            </Text>
                        </Stack>
                    </Group>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        View Patient
                    </Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={3}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Group justify='center'>
                        <Card.Section>
                            <Avatar size={70} src={data.src}/>
                        </Card.Section>
                    </Group>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="lg">
                            {data.name}
                        </Text>
                    </Group>
                    <Group mt="md" mb="xs">
                        <Stack
                            align="flex-start"
                            justify="flex-start"
                            gap="xs"
                        >
                            <Text size="sm">
                                <b>ID</b>: {data.id}
                            </Text>
                            <Text size="sm">
                                <b>DOB</b>: {data.dob}
                            </Text>
                            <Text size="sm">
                                <b>Age</b>: {data.age}
                            </Text>
                            <Text size="sm">
                                <b>Gender</b>: {data.gender}
                            </Text>
                            <Text size="sm">
                                <b>Nationality</b>: {data.nationality}
                            </Text>
                        </Stack>
                    </Group>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        View Patient
                    </Button>
                </Card>
            </Grid.Col>
        </Grid>
    );

}

export default Patients;