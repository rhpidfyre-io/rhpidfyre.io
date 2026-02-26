import { Route, Routes } from "react-router";
import Discord from "./app/discord/init";
import Index from "./app/init";

function App() {
	return (
		<Routes>
			<Route index element={<Index />}></Route>
			<Route path="/discord" element={<Discord />}></Route>
		</Routes>
	);
}

export default App;
