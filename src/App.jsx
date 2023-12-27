import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider, createTheme, Button } from "@mantine/core";
import Routing from "./Components/Routing";


function App() {
	const theme = createTheme({
		defaultRadius: "md",
		components: {
			Button: Button.extend({
				defaultProps: {
					color: "blue.8",
				},
			}),
		},
	});

	return (
		<MantineProvider theme={theme}>
			<Routing />
		</MantineProvider>
	);
}

export default App;
