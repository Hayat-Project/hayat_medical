import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Dashboard } from "./Components/Dashboard";

export default function App() {
	return (
		<MantineProvider>
			<Dashboard />
		</MantineProvider>
	);
}