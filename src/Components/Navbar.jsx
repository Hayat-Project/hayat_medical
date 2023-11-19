import { useState } from "react";
import {
  IconHome2,
  IconCalendarEvent,
  IconUser,
  IconArticle,
  IconMessage2,
  IconSettings,
  IconLogout2,
  IconPlus,
} from "@tabler/icons-react";
import { Box, NavLink, Text, AppShell, Group, Button, Flex } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

function Navbar() {
  const [active, setActive] = useState(
    localStorage.getItem("activeIndex")
      ? parseInt(localStorage.getItem("activeIndex"))
      : 0
  );
  var isLongDisplay = useMediaQuery(`(max-height: 1100px)`);
  const data = [
    {
      key: 0,
      label: "Overview",
      leftSection: <IconHome2 size="1rem" stroke={1.5} />,
      mt: 35,
      color: "blue",
      path: "/Overview",
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
      path: "/Appointments",
    },
    {
      key: 2,
      label: "Patients",
      leftSection: <IconUser size="1rem" stroke={1.5} />,
      color: "blue",
      path: "/Patients",
    },
    {
      key: 3,
      label: "Consultations Log",
      leftSection: <IconArticle size="1rem" stroke={1.5} />,
      color: "blue",
      path: "/Consultationslog",
    },
    {
      key: 4,
      headingText: (
        <Text c="gray" size="xs" mt={20}>
          SUPPORT
        </Text>
      ),
      label: "Messages",
      leftSection: <IconMessage2 size="1rem" stroke={1.5} />,
      mt: 11,
      color: "blue",
      path: "/Messages",
    },
    {
      key: 5,
      label: "Setting",
      leftSection: <IconSettings size="1rem" stroke={1.5} />,
      mt: isLongDisplay ? '8vh' : '52vh',
      color: "blue",
      path: "/Setting",
    },
    {
      key: 6,
      label: "Logout",
      leftSection: <IconLogout2 size="1rem" stroke={1.5} />,
      color: "red",
    },
  ];

  const items = data.map((item, index) => (
    <div key={item.key}>
      {item.headingText}
      <NavLink
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
      <Group justify="center" mt={15}>
        <Button fullWidth h={45} leftSection={<IconPlus size={22} />}>
          New Video Consultation
        </Button>
      </Group>
      <Flex justify="space-between" direction="column" w="100%">{items}</Flex>
    </AppShell.Navbar>
  );
}

export default Navbar;
