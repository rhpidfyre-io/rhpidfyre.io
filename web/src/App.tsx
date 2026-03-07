import { Route, Routes } from "react-router";
import About from "./app/about/init";
import Blog from "./app/blog/init";
import Discord from "./app/discord/init";
import Footer from "./app/footer";
import Header from "./app/header";
import Index from "./app/init";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Index />} />
				<Route path="/discord" element={<Discord />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
