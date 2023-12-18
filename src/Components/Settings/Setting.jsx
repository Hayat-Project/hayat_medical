import MainHeader from "../MainHeader";
import { Card, Grid, Divider, SimpleGrid, Button, Stack } from "@mantine/core";
import {
  IconAlertCircle,
  IconBell,
  IconShieldHalfFilled,
} from "@tabler/icons-react";
import AccountInformation from "./AccountInformation";
import Notification from "./Notification";
import AccountSecurity from "./AccountSecurity";
import { useState } from "react";

function Setting() {
  const [showInfo, setShowInfo] = useState(true);
  const [showNotifi, setShowNotifi] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);

  function showAccountInformation() {
    setShowInfo(true);
    setShowNotifi(false);
    setShowSecurity(false);
  }
  function showNotification() {
    setShowNotifi(true);
    setShowInfo(false);
    setShowSecurity(false);
  }
  function showAccountSecurity() {
    setShowSecurity(true);
    setShowInfo(false);
    setShowNotifi(false);
  }
  return (
    <>
      <MainHeader
        header="Settings"
        subheader="Manage Your Account!"
        badge={false}
      />

      <Card shadow="sm" withBorder mt={10}>
        <Grid mt={30} mb={30} mr={30}>
          <Grid.Col span={{ base: 12, md: "content", lg: "content",}}>
            <SimpleGrid>
              <Stack align="flex-start">
                <Button
                  onClick={showAccountInformation}
                  variant="subtle"
                  size="md"
                  leftSection={<IconAlertCircle size={16} />}
                >
                  Account Information
                </Button>
                <Button
                  onClick={showNotification}
                  variant="subtle"
                  size="md"
                  leftSection={<IconBell size={16} />}
                >
                  Notification
                </Button>
                <Button
                  onClick={showAccountSecurity}
                  variant="subtle"
                  size="md"
                  leftSection={<IconShieldHalfFilled size={16} />}
                >
                  Account Security
                </Button>
              </Stack>
            </SimpleGrid>
          </Grid.Col>

          <Divider orientation="vertical" mr={15} visibleFrom="sm"/>

          <Grid.Col span={{ base: "auto", md: "auto", lg: "auto" }}>
            <SimpleGrid verticalSpacing="1">
              {showInfo && <AccountInformation />}
              {showNotifi && <Notification />}
              {showSecurity && <AccountSecurity />}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}

export default Setting;
