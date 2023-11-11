import { Flex, Image, Burger, AppShell, rem, em } from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";
import { MantineLogo } from '@mantine/ds';
import SearchBar from './SearchBar.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx'
import { IoMailOutline, IoNotificationsOutline } from "react-icons/io5";

function Header({ toggle, opened }) {
	const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
	const iconsStyle = { width: rem(30), height: rem(30) }
	
	return (
		<AppShell.Header>
			<Flex justify="space-between" align="center" style={{ padding: '10px 20px' }}>
				<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
				<MantineLogo size={35} />
				<SearchBar />
				<Flex justify="space-between" style={{ width: rem(isMobile ? 120 : 200) }} >
					<ThemeSwitcher />
					<IoMailOutline style={iconsStyle} />
					<IoNotificationsOutline style={iconsStyle} />
					<Image
						radius="lg"
						style={iconsStyle}
						src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
					/>
				</Flex>
			</Flex>
		</AppShell.Header>
	);
}

export default Header;