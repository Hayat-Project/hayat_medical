import { Menu, Button, Badge, NavLink, Flex, Group } from "@mantine/core";

import { useState } from "react";
import { DatePicker, TimeInput } from "@mantine/dates";

import {
	IconArrowsSort,
	IconCalendar,
	IconProgress,
	IconClockHour10,
} from "@tabler/icons-react";

import classes from "../css/Card.module.css";

function FilterBar() {
	const [value, setValue] = useState(0);
	return (
		<Group justify="center">
			<Group justify="center" p="25" className={classes.card}>
				<Flex w="100%">
					<Menu shadow="md" width="360">
						<Menu.Target>
							<NavLink
								label="Sort"
								leftSection={<IconArrowsSort size="1rem" stroke={1.5} />}
								childrenOffset={28}
							></NavLink>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Label>Sort</Menu.Label>
							<Menu.Item>A - Z</Menu.Item>
							<Menu.Item>Z - A</Menu.Item>
						</Menu.Dropdown>
					</Menu>

					<Menu shadow="md" width="300">
						<Menu.Target>
							<NavLink
								label="Date"
								leftSection={<IconCalendar size="1rem" stroke={1.5} />}
								childrenOffset={28}
							></NavLink>
						</Menu.Target>

						<Menu.Dropdown>
							<DatePicker
								placeholder="Pick date"
								allowDeselect
								value={value}
								onChange={setValue}
							/>
						</Menu.Dropdown>
					</Menu>

					<Menu shadow="md" width="360">
						<Menu.Target>
							<NavLink
								label="Time"
								leftSection={<IconClockHour10 size="1rem" stroke={1.5} />}
								childrenOffset={28}
							></NavLink>
						</Menu.Target>

						<Menu.Dropdown>
							<TimeInput label="Start Date" placeholder="Input placeholder" />
							<TimeInput label="End Date" placeholder="Input placeholder" />
						</Menu.Dropdown>
					</Menu>

					<Menu shadow="md" width="360">
						<Menu.Target>
							<NavLink
								label="Status"
								leftSection={<IconProgress size="1rem" stroke={1.5} />}
								childrenOffset={28}
							></NavLink>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Label>Status</Menu.Label>
							<Menu.Item>
								<Badge variant="light" color="teal" size="sm" radius="lg">
									Done
								</Badge>
							</Menu.Item>
							<Menu.Item>
								<Badge variant="light" color="red" size="sm" radius="lg">
									Canceled
								</Badge>
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
					<Button>Search</Button>
				</Flex>
			</Group>
		</Group>
	);
}

export default FilterBar;
