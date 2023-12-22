import { Avatar, Button, Card, Flex, Group, Select, SimpleGrid, Stack, TextInput, Title } from "@mantine/core";
import MainHeader from "../MainHeader";

function Customization() {
    return (
        <>
            <Flex direction="column" wrap="wrap">
                <MainHeader header="Customization" subheader="Customize your hospital information" badge={false} />
            </Flex>
            <Card shadow="md" mt={10}>
                <SimpleGrid cols={{ base: 1, sm: 1, lg: 2 }}>
                    <Stack mr={50}>
                        <Avatar ml={60} w={150} h={150}></Avatar>
                        <Group>
                            <Button color="red" w={130}>Remove</Button>
                            <Button w={130}>Change Logo</Button>
                        </Group>
                        <Title order={4}>General Information</Title>
                        <TextInput
                            label="Name"
                            withAsterisk
                            placeholder="Hospital Name"
                        />
                        <TextInput
                            label="Email"
                            withAsterisk
                            placeholder="Your Hospital Email"
                        />
                        <TextInput
                            label="Phone"
                            withAsterisk
                            placeholder="Start With Country Code"
                        />
                        <TextInput
                            label="Address"
                            withAsterisk
                            placeholder="Full Address"
                        />
                        <Select
                            label="Country"
                            withAsterisk
                            data={["Palastine", "Lebanon", "Jordan", "UAE", "Syria", "KSA"]}
                            placeholder="Frontend Website Link"
                        />
                    </Stack>
                    <Stack>
                        <Title order={4}>Theming Options</Title>
                        <Select
                            label="Buttons Color"
                            placeholder="Select Color"
                            data={["Gray", "Red", "Blue", "Pink", "Green", "Indigo", "Teal", "Cyan", "Yellow", "Orange"]}
                        />
                    </Stack>
                </SimpleGrid>
                <Group justify="center" mt={20}>
                    <Button w={130} variant="outline">Discard</Button>
                    <Button w={130}>Save</Button>
                </Group>
            </Card>
        </>
    )
}

export default Customization;