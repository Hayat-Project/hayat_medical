import { Switch, rem, useMantineTheme, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function ThemeSwitcher({  isDarkMode }) {

	const { colorScheme, setColorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();
  	const computedColorScheme = useComputedColorScheme('light');

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

	

	return (
		<Switch size="lg" color="dark.4"
			onLabel={sunIcon} offLabel={moonIcon} checked={computedColorScheme === 'dark' ? true : false}
			onChange={(event) => {
				setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
			}}
		/>
	);
}

export default ThemeSwitcher;