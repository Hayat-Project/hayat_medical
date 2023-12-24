import {Group, Table, ActionIcon } from '@mantine/core';
import { IconTrash, IconEye } from '@tabler/icons-react';

function UsersTable(props) {
    const data = props.userData;
    const rows = data.map((item) => (
        <Table.Tr key={item.value1}>
            <Table.Td>{item.value1}</Table.Td>
            <Table.Td>{item.value2}</Table.Td>
            <Table.Td>{item.value3}</Table.Td>
            <Table.Td>{item.value4}</Table.Td>
            <Table.Td>
                <Group gap="3">
                    <ActionIcon variant="subtle" color="blue" size="lg" radius="md" aria-label="Trash">
                        <IconEye style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="red" size="lg" radius="md" aria-label="Trash">
                        <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Table.Td>
        </Table.Tr>
    ));
    
    return (
        <Table striped highlightOnHover withTableBorder withRowBorders={false}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>{props.heading1}</Table.Th>
                    <Table.Th>{props.heading2}</Table.Th>
                    <Table.Th>{props.heading3}</Table.Th>
                    <Table.Th>{props.heading4}</Table.Th>
                    <Table.Th>Actions</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
    
}
export default UsersTable;