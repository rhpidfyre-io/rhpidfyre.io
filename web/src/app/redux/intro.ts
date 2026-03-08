import { createSlice } from "@reduxjs/toolkit";

const intros = createSlice({
	name: "intros",
	initialState: {
		discord_played: false,
		about_played: false,
		home_played: false,
		login_played: false,
	},
	reducers: {
		play_discord: (state) => {
			state.discord_played = true;
		},
		play_home: (state) => {
			state.home_played = true;
		},
		play_about: (state) => {
			state.about_played = true;
		},
		play_login: (state) => {
			state.login_played = true;
		},
	},
});

export default intros;
