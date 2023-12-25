import { Flex, ActionIcon, Burger, AppShell, rem, em, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import SearchBarFilter from "./SearchBarFilter.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";
import ProfileAvatar from "./ProfileAvatar.jsx";
import NotificatiionPopover from "./NotificatiionPopover.jsx";
import HayatLogo from "./HayatLogo.jsx";

function Header({ toggle, opened }) {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    const iconsStyle = { width: rem(28.5), height: rem(28.5) };
    const [isDarkMode, setChecked] = useState(false);

    const handleClickMessages = () => {
        localStorage.setItem("activeIndex", 4);
        setActive(4);
    };

    return (
        <AppShell.Header>
            <Flex
                justify="space-between"
                align="center"
                style={{ padding: "10px 20px" }}
            >
                <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                {isDarkMode ? <HayatLogo image="/Logo-dark.png"/> : <HayatLogo image="/Logo.png"/>}
                <SearchBarFilter width={500} placeholder="Type to search" visibleFrom="md" />
                <Group gap={rem(isMobile ? 8 : "md")}>
                    <ThemeSwitcher
                        onChange={(event) => setChecked(event.currentTarget.isDarkMode)}
                        isDarkMode={isDarkMode} />
                    <Group visibleFrom="xs">
                        <ActionIcon
                            variant="default"
                            component="a"
                            href="/Messages"
                            size="xl"
                            radius='md'
                            onClick={() => handleClickMessages()}
                        >
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
