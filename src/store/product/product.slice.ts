import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import Product, { ProductRequestObject, ProductState } from './product.types';

const initialState: ProductState = {
	products: [],
	isLoading: false,
	error: null,
	product: null,
};

export type AddProductStartAction = UnknownAction & {
	payload: ProductRequestObject;
};

export type FetchProductStartAction = UnknownAction & {
	payload: string;
};

export type SearchProductsStartAction = UnknownAction & {
	payload: string;
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		fetchProductsStart(state) {
			state.products = [];
			state.isLoading = true;
			state.error = null;
		},
		fetchProductsSuccess(state, action: { payload: Product[] }) {
			state.isLoading = false;
			state.products = action.payload;
		},
		fetchProductsFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		addProductStart(state, action: AddProductStartAction) {
			state.product = null;
			state.isLoading = true;
			state.error = null;
		},
		addProductSuccess(state, action: { payload: Product }) {
			state.isLoading = false;
			state.product = action.payload;
			state.products.push(action.payload);
		},
		addProductFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		fetchProductStart(state, action: FetchProductStartAction) {
			state.product = null;
			state.isLoading = true;
			state.error = null;
		},
		fetchProductSuccess(state, action: { payload: Product }) {
			state.isLoading = false;
			state.product = action.payload;
		},
		fetchProductFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		searchProductsStart(state, action: SearchProductsStartAction) {
			state.products = [];
			state.isLoading = true;
			state.error = null;
		},
		searchProductsSuccess(state, action: { payload: Product[] }) {
			state.isLoading = false;
			state.products = action.payload;
		},
		searchProductsFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchProductsStart,
	fetchProductsSuccess,
	fetchProductsFailure,
	addProductStart,
	addProductSuccess,
	addProductFailure,
	fetchProductStart,
	fetchProductSuccess,
	fetchProductFailure,
	searchProductsStart,
	searchProductsSuccess,
	searchProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
