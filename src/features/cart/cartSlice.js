import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		value: {
			products: [],
		},
	},
	reducers: {
		add: (state, action) => {
			state.value.products.push(action.payload);
		},
		incrementProductQuantity: (state, action) => {
			state.value.products = state.value.products.map((product) => {
				return product.name === action.payload.name
					? { ...product, quantity: ++product.quantity }
					: product;
			});
		},
		decrementProductQuantity: (state, action) => {
			state.value.products = state.value.products
				.map((product) => {
					return product.name === action.payload.name
						? { ...product, quantity: --product.quantity }
						: product;
				})
				.filter((product) => product.quantity !== 0);
		},
		removeProductById: (state, action) => {
			state.value.products = state.value.products.filter(
				(product) => product.name !== action.payload.name
			);
		},
		clearAll: (state) => {
			state.value.products = [];
		},
	},
});

export const {
	add,
	incrementProductQuantity,
	removeProductById,
	decrementProductQuantity,
	clearAll,
} = cartSlice.actions;

export default cartSlice.reducer;
