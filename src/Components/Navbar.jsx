import { useState } from 'react';
import { IconHome2, IconCalendarEvent, IconUser, IconArticle, IconMessage2, IconSettings, IconLogout2, IconPlus} from '@tabler/icons-react';
import { Box, NavLink, Text, Anchor, AppShell, Group, Button} from '@mantine/core';
import { Link } from 'react-router-dom';


const data = [
  {
    label: <Text component={Link} variant='link' to='/Overview'>Overview</Text>,
    leftSection: <IconHome2 size="1rem" stroke={1.5} />,
    mt: 35,
    color: "blue"
  },
  {
    headingText: <Text c="gray" size="xs" mt={20}>PATIENT RELATION</Text>,
    label: <Text component={Link} variant='link' to='/Appointments'>Appointments</Text>,
    leftSection: <IconCalendarEvent size="1rem" stroke={1.5} />,
    mt: 11,
    color: "blue"
  },
  {
    label: <Text component={Link} variant='link' to='/Patients'>Patients</Text>,
    leftSection: <IconUser size="1rem" stroke={1.5} />,
    color: "blue"
  },
  {
    label: <Text component={Link} variant='link' to='/Consultationslog'>Consultations Log</Text>,
    leftSection: <IconArticle size="1rem" stroke={1.5} />,
    color: "blue"
  },
  {
    headingText: <Text c="gray" size="xs" mt={20}>SUPPORT</Text>,
    label: <Text component={Link} variant='link' to='/Messages'>Messages</Text>,
    leftSection: <IconMessage2 size="1rem" stroke={1.5} />,
    mt: 11,
    color: "blue"
  },
  {
    label: <Text component={Link} variant='link' to='/Setting'>Setting</Text>,
    leftSection: <IconSettings size="1rem" stroke={1.5} />,
    mt: 400,
    color: "blue"
  },
   {
    label: <Text component={Link} variant='link' to='/Logout'>Logout</Text>,
    leftSection: <IconLogout2 size="1rem" stroke={1.5} />,
    color: "red"
  },
];

function Navbar() {
    const [active, setActive] = useState(0);

    const items = data.map((item, index) => (
        <>
            <Text>{item.headingText}</Text>
            <NavLink
                key={item.label}
                active={index === active}
                label={item.label}
                leftSection={item.leftSection}
                mt={item.mt}
                onClick={() => {
                  setActive(index)
                }}
                color={item.color}
            />
        </>
    ));

    return (
		<AppShell.Navbar p="md">
			<Group justify="center" mt={15}>
					<Button leftSection={<IconPlus size={22} />}>New Video Consultation</Button>
			</Group>
			<Box w={220} >{items}</Box>
		</AppShell.Navbar>

    );
}

export default Navbar;