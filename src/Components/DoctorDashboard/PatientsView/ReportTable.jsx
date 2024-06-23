import { Table, Button, Text, Modal, Image, Loader } from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage"; // Import Storage SDK methods
import { storage } from "/src/Config/firebase.js"; // Assuming storage is your Firebase Storage instance

function ReportTable(props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [reports, setReports] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [selectedImageName, setSelectedImageName] = useState(""); // State for selected image name
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchReportImages = async () => {
      try {
        const storageRef = ref(
          storage,
          `Radiological Image/${props.PatientID}`
        ); // Reference to 'reports' folder in Storage
        const listResult = await listAll(storageRef);
        const reportPromises = listResult.items.map(async (item) => {
          const imageUrl = await getDownloadURL(item);
          const metadata = await getMetadata(item); // Fetch metadata
          const creationTime = new Date(
            metadata.timeCreated
          ).toLocaleDateString(); // Extract and format creation date
          return {
            id: item.name,
            reportName: item.name, // Assuming item name is used as report name
            imageUrl: imageUrl,
            date: creationTime, // Include the creation date
          };
        });
        const fetchedReports = await Promise.all(reportPromises);
        setReports(fetchedReports);
      } catch (error) {
        console.error("Error fetching report images:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchReportImages();
  }, []);

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
          onClick={() => handleViewClick(element.imageUrl, element.reportName)} // Pass the image URL to handleViewClick
          rightSection={<IconEye size={14} />}
          size="xs"
        >
          View
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  if (loading) {
    return <Loader />; // Display a loader while fetching data
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
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={4}>
                <Text align="center">No reports found</Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
      <Modal
        opened={opened}
        onClose={close}
        title={selectedImageName}
        size="xl"
      >
        <Image src={selectedImage} />
      </Modal>
    </>
  );
}

export default ReportTable;
