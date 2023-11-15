import { Switch, rem, useMantineTheme, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useState } from 'react';

function ThemeSwitcher() {

	const [checked, setChecked] = useState(false);
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
			visibleFrom='xs'
			onLabel={sunIcon} offLabel={moonIcon} checked={computedColorScheme === 'dark' ? true : false}
			onChange={(event) => {
				setChecked(event.currentTarget.checked);
				setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
			}}
		/>
	);
}

export default ThemeSwitcher;