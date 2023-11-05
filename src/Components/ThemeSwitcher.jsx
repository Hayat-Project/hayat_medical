import { Switch, rem, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useState } from 'react';

export default function ThemeSwitcher() {

	const [checked, setChecked] = useState(false);
	const { setColorScheme } = useMantineColorScheme();
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

	return (
		<Switch size="lg" color="dark.4"
			onLabel={sunIcon} offLabel={moonIcon} checked={checked}
			onChange={(event) => {
				setChecked(event.currentTarget.checked);
				setColorScheme(checked ? 'light' : 'dark');
			}}
		/>
	);
}