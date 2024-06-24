import { Card, Tabs, rem } from "@mantine/core";
import { IconBodyScan } from "@tabler/icons-react";
import ReportTable from "./ReportTable";

function ReportsTabs(props) {
  const iconStyle = { width: rem(19), height: rem(19) };
  return (
    <Card shadow="sm" h={props.height} withBorder>
      <Tabs radius="md" defaultValue="Screening">
        <Tabs.List>
          <Tabs.Tab
            value="Screening"
            leftSection={<IconBodyScan style={iconStyle} />}
          >
            Screening
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Screening">
          <ReportTable patientID={props.patientID} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  ); 
}

export default ReportsTabs;
