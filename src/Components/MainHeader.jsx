import { Badge, Group, Title } from "@mantine/core";

function MainHeader(props) {
	return (
		<Group>
			<Title size="h3">
				{props.text}
			</Title>
			<Badge variant="light" color="rgba(138, 74, 212, 0.97)" size="xs">
				{props.dataSize} patients
			</Badge>
		</Group>
	);
}

export default MainHeader;
