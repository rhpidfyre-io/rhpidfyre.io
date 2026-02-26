import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { intro_store } from "./app/redux/stores.ts";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={intro_store}>
			<TooltipProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</TooltipProvider>
		</Provider>
	</StrictMode>,
);
