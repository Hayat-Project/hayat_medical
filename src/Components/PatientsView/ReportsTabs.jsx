import { Card, Tabs, rem } from "@mantine/core";
import { IconBodyScan, IconReportMedical } from "@tabler/icons-react";
import ReportTable from "./ReportTable";
const reports = [
  { id: 1, reportName: "CheckUP Result", date: "Mar 24 2023" },
  {
    id: 2,
    reportName: "Medicine Prescription",
    date: "Sep 8 2022",
  },
  { id: 3, reportName: "CheckUp Result", date: "Jan 12 2023" },
  {
    id: 4,
    reportName: "Root Cleaning Report",
    date: "Jan 12 2023",
  },
];
const Screening = [
  { id: 1, reportName: "Mass", date: "Mar 24 2023" },
  { id: 2, reportName: "multiphasic", date: "Sep 8 2022" },
  { id: 3, reportName: "opportunistic", date: "Jan 12 2023" },
  { id: 4, reportName: "Targeted", date: "Jan 12 2023" },
];

function ReportsTabs() {
  const iconStyle = { width: rem(19), height: rem(19) };
  return (
    <Card shadow="sm" padding="18" h={263} radius="md" withBorder>
      <Tabs radius="md" defaultValue="Screening">
        <Tabs.List>
          <Tabs.Tab
            value="Screening"
            leftSection={<IconBodyScan style={iconStyle} />}
          >
            Screening
          </Tabs.Tab>
          <Tabs.Tab
            value="Reports"
            leftSection={<IconReportMedical style={iconStyle} />}
          >
            Reports
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Screening">
          <ReportTable title="Screening" data={Screening} />
        </Tabs.Panel>

        <Tabs.Panel value="Reports">
          <ReportTable title="Reports" data={reports} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}

export default ReportsTabs;
