import { Table } from '@mantine/core';
function UsersTable() {
    const elements = [
        { userID: "12323", name: "Maryam Marwan", designation: 'Doctor', department: 'Dermatology' },
        { userID: "12365", name: "Sara Almahmoud", designation: 'Doctor', department: 'Cardiology' },
        { userID: "76589", name: "Hassan Alali", designation: 'Doctor', department: 'Dental' },
        { userID: "45324", name: "Adam Zeinadeen", designation: 'Doctor', department: 'Pediatric' },
        { userID: "52358", name: "Ramy Elrayan", designation: 'Doctor', department: 'Oncology' },
    ];
    const rows = elements.map((element) => (
        <Table.Tr key={element.userID}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.designation}</Table.Td>
            <Table.Td>{element.department}</Table.Td>
        </Table.Tr>
    ));
    
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>User ID</Table.Th>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Designation</Table.Th>
                    <Table.Th>Department</Table.Th>
                </Table.Tr>
            </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    );
    
}
export default UsersTable;