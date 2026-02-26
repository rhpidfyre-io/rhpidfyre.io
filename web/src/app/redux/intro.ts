import { createSlice } from "@reduxjs/toolkit";

const intro = createSlice({
	name: "intro",
	initialState: {
		played: false,
	},
	reducers: {
		play_intro: (state) => {
			state.played = true;
		},
	},
});

const discord_intro = createSlice({
	name: "discord_intro",
	initialState: {
		played: false,
	},
	reducers: {
		play_intro: (state) => {
			state.played = true;
		},
	},
});

export { discord_intro, intro };
