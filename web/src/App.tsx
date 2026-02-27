import { Route, Routes } from "react-router";
import Discord from "./app/discord/init";
import Footer from "./app/footer";
import Header from "./app/header";
import Index from "./app/init";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Index />}></Route>
				<Route path="/discord" element={<Discord />}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
