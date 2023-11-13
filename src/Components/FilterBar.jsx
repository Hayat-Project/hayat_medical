import { Menu, Button, Badge, NavLink, Flex, Group } from "@mantine/core";

import {
  IconArrowsSort,
  IconCalendar,
  IconProgress,
} from "@tabler/icons-react";

import classes from "../css/Card.module.css";

function FilterBar() {
  return (
    <Group justify="center">
      <Group justify="center" p="25" className={classes.card}>
        <Flex w="100%">
          <Menu shadow="md" width={200}>
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

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <NavLink
                label="Date"
                leftSection={<IconCalendar size="1rem" stroke={1.5} />}
                childrenOffset={28}
              ></NavLink>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Date</Menu.Label>
              <Menu.Item>Start Date</Menu.Item>
              <Menu.Item>End Date</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <NavLink
                label="Status"
                leftSection={<IconProgress size="1rem" stroke={1.5} />}
                childrenOffset={28}
              ></NavLink>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Status</Menu.Label>
              <Menu.Label>
                <Badge variant="light" color="teal" size="sm" radius="lg">
                  Done
                </Badge>
              </Menu.Label>
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