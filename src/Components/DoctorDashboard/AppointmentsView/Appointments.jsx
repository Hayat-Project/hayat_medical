import { Grid, Card, Flex, Group, Title, Text } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import MainHeader from '../../MainHeader';
import UpcomingAppointments from './UpcomingAppointments';
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import StatsRingCard from './StatsRingCard';

function Appointments() {
	const [search, setSearch] = useState("");
	const isLongDisplay = useMediaQuery(`(max-height: 975px)`);
	const isMobile = useMediaQuery(`(max-width: 432px)`);

	return (
		<>
			<Flex direction="column" mb={20}>
				<MainHeader header="Appointments" subheader="View Your Schedule!" badge={false}/>
			</Flex>
			<Grid grow>
				<Grid.Col span={8}>
					{/* Upcoming Patients*/}
					<Card shadow="sm" padding="lg" withBorder h={isLongDisplay ? 780 : 1100}>
						<Group>
							<Title order={4} >Upcoming Patients</Title>
						</Group>
						<UpcomingAppointments searchWord={search.toLowerCase()} />
					</Card>
				</Grid.Col>
				<Grid.Col span={4}>
					<Grid>
						<Grid.Col>
							{/* Calendar Card */}
							<Card shadow="sm" padding="xl" radius="md" withBorder>
								<Group justify='center'>
									<StatsRingCard />
								</Group>
							</Card>
						</Grid.Col>
						<Grid.Col>
							<Card shadow="sm" padding="lg" radius="md" withBorder>
								<Group justify='center'>
									<Calendar size={isMobile ? 'sm' : 'xl'} />
								</Group>
							</Card>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
		</>
	);

}

export default Appointments;