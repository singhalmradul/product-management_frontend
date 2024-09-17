import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import Product, { ProductRequestObject, ProductState } from './product.types';

const initialState: ProductState = {
	products: [],
	isLoading: false,
	error: null,
};

export type AddProductStartAction = UnknownAction & {
	payload: ProductRequestObject;
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		fetchProductsStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchProductsSuccess(state, action: { payload: Product[] }) {
			state.isLoading = false;
			state.products = action.payload;
		},
		fetchCProductsFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		addProductStart(state, action: AddProductStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		addProductSuccess(state, action: { payload: Product }) {
			state.isLoading = false;
			state.products.push(action.payload);
		},
		addProductFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchProductsStart,
	fetchProductsSuccess,
	fetchCProductsFailure,
	addProductStart,
	addProductSuccess,
	addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
