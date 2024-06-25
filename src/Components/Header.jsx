import { Flex, ActionIcon, Burger, AppShell, rem, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import SearchBarFilter from "./SearchBarFilter.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { IoMailOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import ProfileAvatar from "./ProfileAvatar.jsx";
import NotificatiionPopover from "./NotificatiionPopover.jsx";
import HayatLogo from "./HayatLogo.jsx";

function Header({ toggle, opened }) {
  const iconsStyle = { width: rem(28.5), height: rem(28.5) };
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const [logoSrc, setLogoSrc] = useState("/images/Logo.png");

  useEffect(() => {
      const theme = document.documentElement.getAttribute(
        "data-mantine-color-scheme"
      );
      setLogoSrc(
        theme === "dark"
          ? "/images/Logo-dark.png"
          : "/images/Logo.png"
      );
  }, []);

  const handleThemeChange = () => {
    const theme = document.documentElement.getAttribute(
      "data-mantine-color-scheme"
    );
    setLogoSrc(
      theme === "dark"
        ? "/images/Logo-dark.png"
        : "/images/Logo.png"
    );
  };

  return (
    <AppShell.Header h={80}>
      <Flex
        justify="space-between"
        align="center"
        style={{ padding: "0px 20px" }}
      >
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <HayatLogo image={logoSrc} />
        <SearchBarFilter
          width={500}
          placeholder="Type to search"
          visibleFrom="md"
        />
        <Group gap={rem(isMobile ? 8 : "md")}>
          <ThemeSwitcher onChange={handleThemeChange} />
          <Group visibleFrom="xs">
            <ActionIcon variant="default" size="xl" radius="md">
              <IoMailOutline style={iconsStyle} />
            </ActionIcon>
          </Group>
          <NotificatiionPopover />
          <ProfileAvatar />
        </Group>
      </Flex>
    </AppShell.Header>
  );
}

export default Header;
