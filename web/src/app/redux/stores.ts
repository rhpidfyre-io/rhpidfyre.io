import { configureStore } from "@reduxjs/toolkit";
import { discord_intro, intro } from "./intro";

const intro_store = configureStore({
	reducer: {
		intro: intro.reducer,
		discord_intro: discord_intro.reducer,
	},
});

export type IntroStoreState = ReturnType<typeof intro_store.getState>;
export { intro_store };
