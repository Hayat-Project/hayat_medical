import { TextInput, rem } from "@mantine/core";
import { BiSearch } from "react-icons/bi";

function SearchBarFilter(props) {
	const icon = <BiSearch style={{ width: rem(16), height: rem(16) }} />;

	return (
		<TextInput
			leftSectionPointerEvents="none"
			leftSection={icon}
			radius="md"
			style={{ width: 300 }}
			placeholder="Type to search"
			visibleFrom="xs"
			onChange={(event) => props.filterTable(event.currentTarget.value)}
		/>
	);
}

export default SearchBarFilter;
