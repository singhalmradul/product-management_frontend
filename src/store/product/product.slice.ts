import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import Product, { ProductRequestObject, ProductState } from './product.types';

const initialState: ProductState = {
	products: [],
	isLoading: false,
	error: null,
	product: null,
};

// MARK: Actions Types
export type SaveProductStartAction = UnknownAction & {
	payload: {
		product: ProductRequestObject;
		id?: string;
	};
};

export type FetchProductStartAction = UnknownAction & {
	payload: string;
};

export type SearchProductsStartAction = UnknownAction & {
	payload: string;
};

export type DeleteProductStartAction = UnknownAction & {
	payload: string;
};

// MARK: Helpers
const addProduct = (products: Product[], payload: Product) =>
	products.map((product) => (product.id === payload.id ? payload : product));

const removeProduct = (products: Product[], payload: string) =>
	products.filter((product) => product.id !== payload);

// MARK: Slice
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
		saveProductStart(state, action: SaveProductStartAction) {
			state.product = null;
			state.isLoading = true;
			state.error = null;
		},
		saveProductSuccess(state, action: { payload: Product }) {
			state.isLoading = false;
			state.product = action.payload;
			state.products = addProduct(state.products, action.payload);
		},
		saveProductFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		fetchProductByIdStart(state, action: FetchProductStartAction) {
			state.product = null;
			state.isLoading = true;
			state.error = null;
		},
		fetchProductByIdSuccess(state, action: { payload: Product }) {
			state.isLoading = false;
			state.product = action.payload;
		},
		fetchProductByIdFailure(state, action: { payload: Error }) {
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
		deleteProductStart(state, action: DeleteProductStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		deleteProductSuccess(state, action: { payload: string }) {
			state.products = removeProduct(state.products, action.payload);
			state.isLoading = false;
			state.product = null;
		},
		deleteProductFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchProductsStart,
	fetchProductsSuccess,
	fetchProductsFailure,
	saveProductStart,
	saveProductSuccess,
	saveProductFailure,
	fetchProductByIdStart,
	fetchProductByIdSuccess,
	fetchProductByIdFailure,
	searchProductsStart,
	searchProductsSuccess,
	searchProductsFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
