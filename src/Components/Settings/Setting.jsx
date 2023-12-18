import MainHeader from "../MainHeader";
import {
  Card,
  Grid,
  Divider,
  SimpleGrid,
  Text,
  Title,
  Button,
  Switch,
  Stack,
  Group,
} from "@mantine/core";

function Setting() {
  return (
    <>
      <MainHeader
        header="Settings"
        subheader="Manage Your Account!"
        badge={false}
      />

      <Card shadow="sm" padding="lg" radius="md" withBorder mt={10}>
        <Grid>
          <Grid.Col span={2}>
            <SimpleGrid>
              <Stack align="flex-start">
                <Button variant="subtle" size="md">
                  Account Information
                </Button>
                <Button variant="subtle" size="md">
                  Notification
                </Button>
                <Button variant="subtle" size="md">
                  Account Security
                </Button>
              </Stack>
            </SimpleGrid>
          </Grid.Col>

          <Divider orientation="vertical" mr={15} />

          <Grid.Col span={6}>
            <SimpleGrid verticalSpacing="1">
              <Title order={3}>Account Security</Title>
              <Text size="md" c="dimmed">
                Update your security preferences
              </Text>
              <Divider my="md" />
              <Text size="lg" td="underline">
                Varification Management
              </Text>
              <Group justify="space-between" mt={20}>
                <Stack align="flex-start" gap="1">
                  <Title order={5}>Two Factor Authentication</Title>
                  <Text size="md" c="dimmed">
                    Use a second device to varify access to your account
                  </Text>
                </Stack>
                <Button variant="filled">Configur</Button>
              </Group>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}

export default Setting;
