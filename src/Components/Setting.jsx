import { Title, Text, Grid, Button, Group } from '@mantine/core';
function Setting() {
    return (
        <><Group justify="space-between">
            <Group>
                <><Title size="h1" ml={20}>
                    Settings
                </Title>
                </>
            </Group>
            <Group>
                <Button variant="default" size="md">Cancel</Button>
                <Button variant="filled" size="md">Save</Button>
            </Group>
        </Group>
        <Group><Text size="md" ml={20}>Manage Your Account</Text></Group></>
    );

}

export default Setting;
