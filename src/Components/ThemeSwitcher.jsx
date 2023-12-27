import { Switch, rem, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function ThemeSwitcher({ onChange }) {
	const { colorScheme, setColorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();

	const sunIcon = (
		<IconSun
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={theme.colors.yellow[4]}
		/>
	);

	const moonIcon = (
		<IconMoonStars
			style={{ width: rem(16), height: rem(16) }}
			stroke={2.5}
			color={theme.colors.blue[6]}
		/>
	);

	const handleToggle = () => {
		setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
		onChange(); // Call the provided callback
	};

	return (
		<Switch
			size="lg"
			color="dark.4"
			visibleFrom="xs"
			onLabel={sunIcon}
			offLabel={moonIcon}
			checked={colorScheme === 'dark'}
			onChange={handleToggle}
		/>
	);
}

export default ThemeSwitcher;
