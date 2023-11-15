/* eslint-disable no-unused-vars */
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./css/global.css"
import { MantineProvider, createTheme, Button, AppShell } from "@mantine/core";
import Dashboard from "./Components/Dashboard";

function App() {
	const theme = createTheme({
		defaultRadius: "md",
		components: {
			Button: Button.extend({
				defaultProps: {
					color: "blue.8",
				},
			}),
			// AppShell: AppShell.extend({
			// 	styles: {
			// 		header: { backgroundColor:  "white"},
			// 	},
			// }),
		},
	});

	return (
		<MantineProvider theme={theme}>
			<Dashboard />
		</MantineProvider>
	);
}

export default App;
