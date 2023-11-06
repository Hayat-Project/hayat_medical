/* eslint-disable react/prop-types */
import { Flex, Burger, AppShell } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { SearchBar } from './SearchBar';
import ThemeSwitcher from './ThemeSwitcher'

export default function Header ({ toggle, opened }) {

	return (
		<AppShell.Header>
			<Flex justify="space-between" align="center" style={{ padding: '10px 20px' }}>
				<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
				<MantineLogo size={35} />
				<SearchBar />
				<ThemeSwitcher />
			</Flex>
		</AppShell.Header>
	);
}

