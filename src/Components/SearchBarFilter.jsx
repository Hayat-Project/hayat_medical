import { TextInput, rem } from "@mantine/core";
import { BiSearch } from "react-icons/bi";

function SearchBarFilter(props) {
  const icon = <BiSearch style={{ width: rem(16), height: rem(16) }} />;

  return (
    <TextInput
      leftSectionPointerEvents="none"
      leftSection={icon}
      radius="md"
      style={{ width: props.width }}
      placeholder={props.placeholder}
	  visibleFrom={props.visibleFrom}
      onChange={(event) => props.filterTable(event.currentTarget.value)}
    />
  );
}

export default SearchBarFilter;
