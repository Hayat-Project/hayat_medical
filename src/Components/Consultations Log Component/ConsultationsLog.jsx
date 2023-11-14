import { Flex } from "@mantine/core";
import { useState } from "react";
import MainHeader from "../MainHeader";
import SearchBarFilter from "../SearchBarFilter";
import ConsultationsLogTable from "./ConsultationsLogTable";

function ConsultationsLog() {
  const [search, setSearch] = useState("");

  return (
    <Flex mih={50} gap="xl" direction="column" wrap="wrap">
      <Flex mih={50} direction="column" wrap="wrap">
        <MainHeader text="Consultations Log" />
      </Flex>

      <Flex mih={50} gap="20" direction="column" wrap="wrap">
        <SearchBarFilter filterTable={(name) => setSearch(name)} />

        <ConsultationsLogTable searchWord={search} />
      </Flex>
    </Flex>
  );
}

export default ConsultationsLog;
