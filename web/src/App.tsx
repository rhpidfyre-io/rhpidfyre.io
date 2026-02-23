import { Routes, Route } from "react-router";
import Index from "./app/init";

function App() {
	return (
		<Routes>
			<Route index element={<Index />}></Route>
		</Routes>
	);
}

export default App;
