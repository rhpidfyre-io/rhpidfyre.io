import { configureStore } from "@reduxjs/toolkit";
import intros from "./intro";

const intro_store = configureStore({
	reducer: {
		intros: intros.reducer,
	},
});

export type IntroStoreState = ReturnType<typeof intro_store.getState>;
export { intro_store };
