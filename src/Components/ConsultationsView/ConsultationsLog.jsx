import { Flex } from "@mantine/core";
import { useState } from "react";
import MainHeader from "../MainHeader";
import SearchBarFilter from "../SearchBarFilter";
import ConsultationsLogTable from "./ConsultationsLogView";

function ConsultationsLog() {
  const [search, setSearch] = useState("");

  return (
    <Flex mih={50} gap="xl" direction="column" wrap="wrap">
      <Flex mih={50} direction="column" wrap="wrap">
        <MainHeader text="Consultations Log" />
      </Flex>

      <Flex mih={50} gap="20" direction="column" wrap="wrap">
        <SearchBarFilter
          filterTable={(name) => setSearch(name)}
          placeholder="Search for patient"
          width={300}
        />

        <ConsultationsLogTable searchWord={search} />
      </Flex>
    </Flex>
  );
}

export default ConsultationsLog;
