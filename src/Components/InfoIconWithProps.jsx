import { Group, HoverCard, Text, Badge } from '@mantine/core';
import { IconInfoCircle } from "@tabler/icons-react";

function InfoIconWithProps(props) {
    return (
        <HoverCard width={props.width} shadow="md">
            <HoverCard.Target>
                <IconInfoCircle style={{ width: '14px' }} />
            </HoverCard.Target>
            <HoverCard.Dropdown>
                <Group>
                    {props.badges.map((badge) => (
                        <Group key={badge.name}>
                            <Badge variant="light"
                                key={badge.name} color={badge.color} size="sm">
                                {badge.name}
                            </Badge>
                            <Text size="sm" weight="bold">
                                {badge.description}
                            </Text>
                        </Group>
                    ))}
                </Group>
            </HoverCard.Dropdown>
        </HoverCard>
    );
}

export default InfoIconWithProps;
