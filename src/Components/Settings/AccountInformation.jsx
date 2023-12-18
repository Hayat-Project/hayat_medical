import { Divider, Text, Title } from "@mantine/core";
import SettingOptionButton from "./SettingOptionButton";
import SettingOptionText from "./SettingOptionText";

function AccountInformation() {
  return (
    <>
      <Title order={3}>Account Information</Title>
      <Text size="md" c="dimmed">
        Manage your account information
      </Text>
      <Divider my="md" />
      <Text size="lg" td="underline">
        General Information
      </Text>
      <SettingOptionText
        title="Data of Birth"
        text="January 9th 1977"
      />
      <SettingOptionText
        title="Gender"
        text="Male"
      />
      <SettingOptionText
        title="Nationality"
        text="Palestine"
      />
      <Divider my="md" />
      <Text size="lg" td="underline">
        Contact Information
      </Text>
      <SettingOptionButton
        title="Phone Number"
        text="+971501234567"
        button="Change"
      />
      <SettingOptionButton
        title="Email Address"
        text="khaled@gmail.com"
        button="Change"
      />
    </>
  );
}

export default AccountInformation;
