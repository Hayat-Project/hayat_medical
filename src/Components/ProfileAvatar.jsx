import { Menu, Avatar, rem } from '@mantine/core';
import { Link } from 'react-router-dom';

import {
	IconSettings,
	IconUserCircle,
	IconLogout,
} from '@tabler/icons-react';
import { IoMailOutline } from "react-icons/io5";

function ProfileAvatar() {
	return (
		<Menu offset={20} withArrow shadow="md" width={250}>
			<Menu.Target>
				<Avatar
					component={Link}
					alt="Profile picture"
					radius="xl"
					src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
				/>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>General</Menu.Label>
				<Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
					Settings
				</Menu.Item>
				<Menu.Item leftSection={<IoMailOutline style={{ width: rem(14), height: rem(14) }} />}>
					Messages
				</Menu.Item>

				<Menu.Divider />

				<Menu.Label>Profile</Menu.Label>
				<Menu.Item
					leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}
				>
					View My Profile
				</Menu.Item>
				<Menu.Item
					color="red"
					leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
				>
					Log out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}

export default ProfileAvatar;