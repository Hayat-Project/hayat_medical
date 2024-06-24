import { useEffect, useState } from 'react';
import { Table, Button, Text, Modal, Image, Loader } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

function ReportTable(props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [reports, setReports] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [selectedImageName, setSelectedImageName] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchReportImages = async () => {
      setLoading(true);
      if (!props.patientID) {
        console.warn("No patient ID provided");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`https://us-central1-hayat-consultation-syste-dd9b0.cloudfunctions.net/api/patients/${props.patientID}/radiological-images`);
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Error fetching report images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReportImages();
  }, [props.patientID]);

  const handleViewClick = (imageUrl, imageName) => {
    setSelectedImage(imageUrl);
    setSelectedImageName(imageName);
    open();
  };

  const rows = reports.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.reportName}</Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>
        <Button
          onClick={() => handleViewClick(element.imageUrl, element.reportName)}
          rightSection={<IconEye size={14} />}
          size="xs"
        >
          View
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  if (loading) {
    return <Loader />; 
  }

  return (
    <>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Screening</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.length > 0 ? rows : (
            <Table.Tr>
              <Table.Td colSpan={3}>
                <Text align="center">No reports found</Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
      <Modal opened={opened} onClose={close} title={selectedImageName} size="xl">
        <Image src={selectedImage} />
      </Modal>
    </>
  );
}

export default ReportTable;
