import { configureStore } from "@reduxjs/toolkit";
import reducer from "./intro";

const intro_store = configureStore({
	reducer: {
		intro: reducer,
	},
});

export type IntroStoreState = ReturnType<typeof intro_store.getState>;
export { intro_store };
