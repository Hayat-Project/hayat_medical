import { Card, Tabs, rem } from "@mantine/core";
import { IconBodyScan, IconReportMedical } from "@tabler/icons-react";
import ReportTable from "./ReportTable";

const reports = [
  { id: 1, reportName: "CheckUp Result", date: "Mar 24 2023" },
  {
    id: 2,
    reportName: "Medicine Prescription",
    date: "Sep 8 2022",
  },
  { id: 3, reportName: "CheckUp Result", date: "Jan 12 2023" },
];
const Screening = [
  { id: 1, reportName: "Mass", date: "Mar 24 2023", image: "/images/image.jpg" },

];

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
          <Tabs.Tab
            value="Reports"
            leftSection={<IconReportMedical style={iconStyle} />}
          >
            Reports
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Screening">
          {props.checkbox === 'checkbox' ? 
            <ReportTable title="Screening" data={Screening} checkbox='checkbox'/> : 
            <ReportTable title="Screening" data={Screening}/>}
        </Tabs.Panel>

        <Tabs.Panel value="Reports">
          <ReportTable title="Reports" data={reports} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}

export default ReportsTabs;
