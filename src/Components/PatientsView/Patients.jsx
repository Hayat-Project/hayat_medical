import PatientsGallery from './PatientsGallery';
import { useState } from "react";
import { Flex } from "@mantine/core";
import SearchBarFilter from "../SearchBarFilter";

function Patients() {
	const [search, setSearch] = useState("");

	return (
		<>
			<Flex mih={50} gap="20" direction="column" wrap="wrap">
				<SearchBarFilter
					filterTable={(name) => setSearch(name)}
					placeholder="Search for patient"
					width={300}
				/>

				<PatientsGallery searchWord={search} />
			</Flex>
		</>
	);
}

export default Patients;
