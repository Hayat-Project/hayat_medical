import { Card, Group, Avatar, Text, Stack, Badge } from "@mantine/core";

function UserList(props) {
  const list = props.userData;
  const data = list.map((user) => (
      <Card withBorder key={user.id}>
        <Group justify="space-between">
          <Group>
            <Avatar variant="filled" radius="xl" size="lg" src={user.image} />
            <Stack gap="3">
              <Text fw={500} size="lg">{user.name}</Text>
              <Text size="sm">{user.message}</Text>
            </Stack>
          </Group>
          <Badge color="blue">{user.notify}</Badge>
        </Group>
      </Card>
    ));
  return(
    <>{data}</>
  );
}
export default UserList;