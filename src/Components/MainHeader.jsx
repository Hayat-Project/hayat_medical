import { Badge, Group, Title, Text } from "@mantine/core";

function MainHeader(props) {
	return (
		<>
			<Group>
				<Group>
					<Title size="h2">
						{props.header}
					</Title>
				</Group>

				{props.badge !== 'false' && (
					<Badge variant="light" color="rgba(138, 74, 212, 0.97)" size="xs">
						{props.dataSize} {props.type}
					</Badge>
				)}
			</Group>
			<Text size="md">{props.subheader}</Text>
		</>
	);
}

export default MainHeader;
