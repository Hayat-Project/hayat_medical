import PatientsGallery from "../PatientsView/PatientsGallery";
import { Flex } from "@mantine/core";
import { useState } from "react";
import MainHeader from "../MainHeader";
import SearchBarFilter from "../SearchBarFilter";

function Patients(props) {
  const [search, setSearch] = useState("");
  return (
    <Flex mih={50} gap="xl" direction="column" wrap="wrap">
      <Flex mih={50} direction="column" wrap="wrap">
        <MainHeader text="patient" />
      </Flex>

      <Flex mih={50} gap="20" direction="column" wrap="wrap">
        <SearchBarFilter
          filterTable={(name) => setSearch(name)}
          placeholder="Search for patient"
          width={300}
        />

        <PatientsGallery searchWord={search.toLowerCase()} />
      </Flex>
    </Flex>
  );

}

export default Patients;
