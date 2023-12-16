import MainHeader from './MainHeader';
import { Card, Grid, Group, SimpleGrid, Text, Title, Button, Switch, Stack} from '@mantine/core';

function Setting() {
	return (
		<><MainHeader header="Settings" subheader="Manage Your Account!" badge={false} />
		
		<Card shadow="sm" padding="lg" radius="md" withBorder mt={10}>
		<Grid>
      <Grid.Col span={3}>
	  <Stack
	  mr={30}
      h={300}
      align="flex-start"
      justify="flex-start"
      gap="xl"
    >
      <Button fullWidth variant="outline" size="md">Account Information</Button>
      <Button fullWidth variant="outline" size="md">Notification</Button>
      <Button fullWidth variant="light" size="md">Account Security</Button>
    </Stack>
	  </Grid.Col>
      <Grid.Col span={9}>
	
		<Title order={3}>Account Security</Title>
		<Text size="md" c="dimmed">Update your security preferences</Text>
		
		<SimpleGrid cols={1} mt={50}>
		<Title order={4} td="underline">Varification Management</Title>
		</SimpleGrid>
		
		<Grid mt={20}>
		<Grid.Col span={10}>
		<Title order={5}>Two Factor Authentication</Title>
		<Text size="md" c="dimmed">Use a second device to varify access to your account</Text>
		</Grid.Col>
		<Grid.Col span={2}>
		<Button variant="filled">Configur</Button>
		</Grid.Col>
		</Grid>

		<Grid mt={30}>
		<Grid.Col span={10}>
		<Title order={5}>2FA via Email</Title>
		<Text size="md" c="dimmed">Weather to varify using email varification</Text>
		</Grid.Col>
		<Grid.Col span={2}>
		<Switch size='xl'></Switch>
		</Grid.Col>
		</Grid>

		<Grid mt={30}>
		<Grid.Col span={10}>
		<Title order={5}>2FA via SMS</Title>
		<Text size="md" c="dimmed">Weather to varify using sms varification</Text>
		</Grid.Col>
		<Grid.Col span={2}>
		<Switch size='xl'></Switch>
		</Grid.Col>
		</Grid>

		<SimpleGrid cols={1} mt={50}>
		<Title order={4} td="underline">Password Security</Title>
		</SimpleGrid>

		<Grid mt={20}>
		<Grid.Col span={10}>
		<Title order={5}>Change Password</Title>
		<Text size="md" c="dimmed">Change password of your account access</Text>
		</Grid.Col>
		<Grid.Col span={2}>
		<Button variant="filled">Change Password</Button>
		</Grid.Col>
		</Grid>

	  </Grid.Col>
	  
    
    </Grid>
		</Card></>
	);
}

export default Setting;

