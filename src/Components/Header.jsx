import { Flex, Avatar, Burger, AppShell, rem, em, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import SearchBarFilter from "./SearchBarFilter.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import { IoMailOutline, IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";

function Header({ toggle, opened }) {
	const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
	const iconsStyle = { width: rem(28.5), height: rem(28.5) };
	const [isDarkMode, setChecked] = useState(false);

	return (
		<AppShell.Header>
			<Flex
				justify="space-between"
				align="center"
				style={{ padding: "10px 20px" }}
			>
				<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
				<MantineLogo size={30} />
				<SearchBarFilter width={500} placeholder="Type to search" visibleFrom="md" />
				<Group gap={rem(isMobile ? 5 : "lg")}>
					<ThemeSwitcher
						onChange={(event) => setChecked(event.currentTarget.isDarkMode)}
						isDarkMode={isDarkMode} />
					<Group visibleFrom="xs">
						<IoMailOutline style={iconsStyle} />
					</Group>
						<IoNotificationsOutline style={iconsStyle} />
					<Avatar
						component="a"
						alt="Profile picture"
						radius="ml"
						target="_blank"
						href="https://github.com"
						src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
					/>
				</Group>
			</Flex>
		</AppShell.Header>
	);
}

export default Header;
