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
    const isMobile = useMediaQuery(`(max-width: 1200px)`);
    const [logoSrc, setLogoSrc] = useState("/Logo.png");

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {
            setLogoSrc(storedTheme === 'dark' ? "/Logo-dark.png" : "/Logo.png");
        } else {
            const theme = document.documentElement.getAttribute('data-mantine-color-scheme');
            setLogoSrc(theme === 'dark' ? "/Logo-dark.png" : "/Logo.png");
        }
    }, []);

    const handleThemeChange = () => {
        const theme = document.documentElement.getAttribute('data-mantine-color-scheme');
        setLogoSrc(theme === 'dark' ? "/Logo-dark.png" : "/Logo.png");
    };

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
                <HayatLogo image={logoSrc} />
                <SearchBarFilter width={500} placeholder="Type to search" visibleFrom="md" />
                <Group gap={rem(isMobile ? 8 : "md")}>
                    <ThemeSwitcher onChange={handleThemeChange} />
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
