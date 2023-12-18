import { Divider, Text, Title } from "@mantine/core";
import SettingOptionButton from "./SettingOptionButton";
import SettingOptionSwitch from "./SettingOptionSwitch";

function Notification() {
  return (
    <>
      <Title order={3}>Notification</Title>
      <Text size="md" c="dimmed">
        Manage your notification settings
      </Text>
      <Divider my="md" />
      <Text size="lg" td="underline">
        General
      </Text>
      <SettingOptionSwitch
        title="Email Notification"
        text="Receive notification via email"
      />
      <SettingOptionSwitch
        title="SMS Notification"
        text="Receive notification via SMS"
      />
      <Divider my="md" />
      <Text size="lg" td="underline">
        Alerts
      </Text>
      <SettingOptionSwitch
        title="Security Alerts"
        text="Receive notification about security alerts"
      />
      <SettingOptionSwitch
        title="Logins Alerts"
        text="Receive notification about logins alerts"
      />
      <Divider my="md" />
      <Text size="lg" td="underline">
        Consultation
      </Text>
      <SettingOptionSwitch
        title="Messages Alerts"
        text="Receive notification about messages alerts"
      />
    
    </>
  );
}

export default Notification;
