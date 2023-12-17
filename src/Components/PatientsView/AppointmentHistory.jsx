import { Card } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function AppointmentHistory(props) {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  return (
    <>
      <Card shadow="sm" padding="md" radius="md" withBorder></Card>
    </>
  );
}

export default AppointmentHistory;
