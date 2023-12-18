import { Divider, Text, Title } from "@mantine/core";
import SettingOptionButton from "./SettingOptionButton";
import SettingOptionSwitch from "./SettingOptionSwitch";

function Notification() {
  return (
    <>
      <Title order={3}>Notification</Title>
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
    </>
  );
}

export default Notification;
