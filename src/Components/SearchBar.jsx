import { TextInput, rem } from '@mantine/core';
import { BiSearch } from 'react-icons/bi';

function SearchBar() {
	const icon = <BiSearch style={{ width: rem(16), height: rem(16) }} />;

	return (
		<TextInput leftSectionPointerEvents="none" leftSection={icon} radius="md" style={{ width: 500 }} placeholder="Type to search" visibleFrom='xs' />
	);
}

export default SearchBar;