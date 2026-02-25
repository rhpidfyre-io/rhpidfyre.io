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

export const { play_intro } = intro.actions;
export default intro.reducer;
