import {
  Grid,
  Card,
  Group,
  SimpleGrid,
  Title,
  Loader,
  Center,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import MainHeader from "../../MainHeader";
import TodoList from "./TodoList";
import OverviewCards from "./OverviewCards";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import {
  IconUser,
  IconClock,
  IconBroadcast,
  IconUsers,
} from "@tabler/icons-react";
import DoctorProfileCard from "./DoctorProfileCard";
import UpcomingAppointments from "../AppointmentsView/UpcomingAppointments";
import ConsultationsLogView from "../ConsultationsView/ConsultationsLogView";
import Cookies from "js-cookie";
import { db } from "../../../Config/firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function Overview() {
  const isMobile = useMediaQuery(`(max-width: 1200px)`);
  const [search, setSearch] = useState("");
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = Cookies.get("email");

  useEffect(() => {
    const doctor = async () => {
      try {
        const email = Cookies.get("email");
        console.log(email);
        const docRef = doc(db, "doctors", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const name = docSnap.data().name;
          const department = docSnap.data().department;
          const overallRating = docSnap.data().overallRating;
          const totalPoints = docSnap.data().totalPoints;
          const profilePicture = docSnap.data().profilePicture;

          // Query patients subcollection
          const patientsRef = collection(docRef, "patients");
          const querySnapshot = await getDocs(patientsRef);

          const patientCount = querySnapshot.size;
          setDoctorData([
            name,
            department,
            overallRating,
            totalPoints,
            profilePicture,
            patientCount,
          ]);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false);
      }
    };

    doctor();
  }, []);

  if (loading) {
    return (
      <Center style={{ height: "100vh" }}>
        <Loader size="xl" />
      </Center>
    );
  }

  return (
    <>
      <MainHeader
        header="Overview"
        subheader="Doctor overview dashboard"
        badge={false}
      />

      <Grid mt={15}>
        <Grid.Col span={isMobile ? 12 : 8}>
          <SimpleGrid>
            <SimpleGrid cols={{ base: 2, sm: 2, lg: 4 }}>
              <OverviewCards
                text="All Patients"
                subText={doctorData[5]}
                icon={
                  <IconUser
                    color="var(--mantine-color-blue-filled)"
                    size="3rem"
                    stroke={1.5}
                  />
                }
              />
              <OverviewCards
                text="Online Consultation"
                subText="1"
                icon={
                  <IconBroadcast
                    color="var(--mantine-color-blue-filled)"
                    size="3rem"
                    stroke={1.5}
                  />
                }
              />
              <OverviewCards
                text="Offline Consultation"
                subText="4"
                icon={
                  <IconUsers
                    color="var(--mantine-color-blue-filled)"
                    size="3rem"
                    stroke={1.5}
                  />
                }
              />
              <OverviewCards
                text="Waiting Patients"
                subText="4"
                icon={
                  <IconClock
                    color="var(--mantine-color-blue-filled)"
                    size="3rem"
                    stroke={1.5}
                  />
                }
              />
            </SimpleGrid>
            <Card shadow="sm" padding="lg" h={316} radius="md">
              <Title order={4}>Upcoming Patients</Title>
              <UpcomingAppointments />
            </Card>
            <Card shadow="sm" padding="lg" h={316} radius="md">
              <Title order={4}>Consulatations Log</Title>
              <ConsultationsLogView searchWord={search.toLowerCase()} />
            </Card>
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 4}>
          <SimpleGrid cols={1}>
            <Card shadow="sm" padding="23" radius="md">
              <DoctorProfileCard
                name={doctorData[0]}
                position="Head of general Surgery"
                rate={doctorData[2]}
                Patients={doctorData[3]}
                image={doctorData[4]}
              />
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <TodoList />
            </Card>
            <Card shadow="sm" padding="8" radius="md">
              <Group justify="center">
                <Calendar size="md" />
              </Group>
            </Card>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Overview;
