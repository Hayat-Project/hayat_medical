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
import SettingOption from "./SettingOption";

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

          <Grid.Col span={9}>
            <SimpleGrid verticalSpacing="1">
              <Title order={3}>Account Security</Title>
              <Text size="md" c="dimmed">
                Update your security preferences
              </Text>
              <Divider my="md" />
              <Text size="lg" td="underline">
              Verification Management
              </Text>
             <SettingOption title="Two Factor Authentication" text="Use a second device to varify access to your account" button="Configure"/>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}

export default Setting;
