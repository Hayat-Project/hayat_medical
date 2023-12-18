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
import SettingOptionButton from "./SettingOptionButton";
import SettingOptionSwitch from "./SettingOptionSwitch";
import {
  IconAlertCircle,
  IconBell,
  IconShieldHalfFilled,
} from "@tabler/icons-react";

function Setting() {
  return (
    <>
      <MainHeader
        header="Settings"
        subheader="Manage Your Account!"
        badge={false}
      />

      <Card shadow="sm" withBorder mt={10}>
        <Grid>
          <Grid.Col span={2}>
            <SimpleGrid>
              <Stack align="flex-start">
                <Button
                  variant="subtle"
                  size="md"
                  leftSection={<IconAlertCircle size={16} />}
                >
                  Account Information
                </Button>
                <Button
                  variant="subtle"
                  size="md"
                  leftSection={<IconBell size={16} />}
                >
                  Notification
                </Button>
                <Button
                  variant="subtle"
                  size="md"
                  leftSection={<IconShieldHalfFilled size={16} />}
                >
                  Account Security
                </Button>
              </Stack>
            </SimpleGrid>
          </Grid.Col>

          <Divider orientation="vertical" mr={15} />

          <Grid.Col span={8}>
            <SimpleGrid verticalSpacing="1">
              <Title order={3}>Account Security</Title>
              <Text size="md" c="dimmed">
                Update your security preferences
              </Text>
              <Divider my="md" />
              <Text size="lg" td="underline">
                Verification Management
              </Text>
              <SettingOptionButton
                title="Two Factor Authentication"
                text="Use a second device to varify access to your account"
                button="Configure"
              />
              <SettingOptionSwitch
                title="2FA via Email"
                text="Weather to verify using email verification"
              />
              <SettingOptionSwitch
                title="2FA via SMS"
                text="Weather to verify using SMS verification"
              />
              <Divider my="md" />
              <Text size="lg" td="underline">
                Password Security
              </Text>
              <SettingOptionButton
                title="Change Password"
                text="Change the password of your account access"
                button="Change Password"
              />
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}

export default Setting;
