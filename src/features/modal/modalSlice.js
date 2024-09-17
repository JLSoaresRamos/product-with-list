import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: "modal",
	initialState: {
		value: {
			isOpen: false,
		},
	},
	reducers: {
		open: (state) => {
			state.value.isOpen = true;
		},
		close: (state) => {
			state.value.isOpen = false;
		},
	},
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
