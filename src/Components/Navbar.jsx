import { useState } from "react";
import {
  IconHome2,
  IconCalendarEvent,
  IconUser,
  IconArticle,
  IconSettings,
  IconLogout2,
  IconPlus,
} from "@tabler/icons-react";
import { NavLink, Text, AppShell, Group, Button, Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

function Navbar() {
  const [active, setActive] = useState(
    localStorage.getItem("activeIndex")
      ? parseInt(localStorage.getItem("activeIndex"))
      : 0
  );
  var isLongDisplay = useMediaQuery(`(max-height: 1100px)`);
  const doctorData = [
    {
      key: 0,
      label: "Overview",
      leftSection: <IconHome2 size="1rem" stroke={1.5} />,
      mt: 35,
      color: "blue",
      path: "/doctorDashboard/overview",
    },
    {
      key: 1,
      headingText: (
        <Text c="gray" size="xs" mt={20}>
          PATIENT RELATION
        </Text>
      ),
      label: "Appointments",
      leftSection: <IconCalendarEvent size="1rem" stroke={1.5} />,
      mt: 11,
      color: "blue",
      path: "/doctorDashboard/Appointments",
    },
    {
      key: 2,
      label: "Patients",
      leftSection: <IconUser size="1rem" stroke={1.5} />,
      color: "blue",
      path: "/doctorDashboard/Patients",
    },
    {
      key: 3,
      label: "Consultations Log",
      leftSection: <IconArticle size="1rem" stroke={1.5} />,
      color: "blue",
      path: "/doctorDashboard/Consultationslog",
    },
    {
      key: 5,
      label: "Setting",
      leftSection: <IconSettings size="1rem" stroke={1.5} />,
      mt: isLongDisplay ? '8vh' : '52vh',
      color: "blue",
      path: "/doctorDashboard/Setting",
    },
    {
      key: 6,
      label: "Logout",
      leftSection: <IconLogout2 size="1rem" stroke={1.5} />,
      color: "red",
      path: "/"
    },
  ];

  const items = doctorData.map((item, index) => (
    <div key={item.key}>
      {item.headingText}
      <NavLink
        style={{ borderRadius: 8 }}
        component={Link}
        variant="link"
        to={item.path}
        active={index === active}
        label={item.label}
        leftSection={item.leftSection}
        mt={item.mt}
        onClick={() => {
          setActive(index);
          localStorage.setItem("activeIndex", index);
        }}
        color={item.color}
      />
    </div>
  ));

  return (
    <AppShell.Navbar p="md">
      <Group justify="center" mt={20}>
        <Button fullWidth h={45} leftSection={<IconPlus size={22} />}>
          New Video Consultation
        </Button>
      </Group>
      <Flex justify="space-between" direction="column" w="100%">{items}</Flex>
    </AppShell.Navbar>
  );
}

export default Navbar;
