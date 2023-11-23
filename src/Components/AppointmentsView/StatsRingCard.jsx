import { Text, RingProgress, Group, useMantineTheme } from '@mantine/core';
import classes from '../../css/StatsRingCard.module.css';

const stats = [
	{ value: 3, label: 'Upcoming Appointments', color: '#007bff' },
];

function StatsRingCard() {
	const theme = useMantineTheme();
	const completed = 4;
	const total = 7;
	const items = stats.map((stat) => (
		<div key={stat.label}>
			<Text className={classes.label}>{stat.value}</Text>
			<Text size="xs" c="dimmed">
				{stat.label}
			</Text>
		</div>
	));

	return (
		<div className={classes.inner}>
			<div>
				<Text fz="xl" className={classes.label}>
					Appointments Counter
				</Text>
				<div>
					<Text className={classes.lead} mt={30}>
						{completed}
					</Text>
					<Text fz="xs" c="dimmed">
						Completed
					</Text>
				</div>
				<Group mt="lg">{items}</Group>
			</div>

			<div className={classes.ring}>
				<RingProgress
					roundCaps
					thickness={6}
					size={150}
					sections={[{ value: (completed / total) * 100, color: theme.primaryColor }]}
					label={
						<div>
							<Text ta="center" fz="lg" className={classes.label}>
								{((completed / total) * 100).toFixed(0)}%
							</Text>
							<Text ta="center" fz="xs" c="dimmed">
								Completed
							</Text>
						</div>
					}
				/>
			</div>
		</div>
	);
}

export default StatsRingCard;

