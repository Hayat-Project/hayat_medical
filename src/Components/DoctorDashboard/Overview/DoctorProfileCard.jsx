import {Text, Group, Avatar, Stack} from "@mantine/core";

function DoctorProfileCard(props) {
    return (<Group>
            <Group justify="center">
                <Avatar size={100} src={props.image}/>
            </Group>
            <Group justify="center" mt="md" mb="xs">
                <Stack gap="0">
                    <Text size="xl">{props.name}</Text>
                    <Text c="dimmed" size="sm">
                        {props.position}
                    </Text>
                    <Group justify="center" mt="md" mb="xs">
                        <Text size="md" fw={700}>
                            Overall Rating
                        </Text>
                        <Text c="blue" size="md">
                            {props.rate}
                        </Text>
                        <Text size="md">-</Text>
                        <Text size="md" fw={700}>
                            Total Patients
                        </Text>
                        <Text c="blue" size="md">
                            {props.Patients}
                        </Text>
                    </Group>
                </Stack>
            </Group>
        </Group>);
}

export default DoctorProfileCard;
