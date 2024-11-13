import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import {
	Order,
	OrderProduct,
	OrderRequestObject,
	OrderState,
} from './order.types';

// MARK: - Initial State
const initialState: OrderState = {
	orders: [],
	order: null,
	orderProduct: null,
	isLoading: false,
	error: null,
};

// MARK: - Types
export type AddProductByIdStartAction = UnknownAction & {
	payload: string;
};

type SearchOrdersStartAction = UnknownAction & {
	payload: string;
};

export type SaveOrderStartAction = UnknownAction & {
	payload: { order: OrderRequestObject; id?: string };
};

export type FetchOrderByIdStart = UnknownAction & {
	payload: string;
}

// MARK: - Slice
const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		fetchAllOrdersStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchAllOrdersSuccess(state, action: { payload: Order[] }) {
			state.orders = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		fetchAllOrdersFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		fetchOrderByIdStart(state, action: FetchOrderByIdStart) {
			state.isLoading = true;
			state.error = null;
		},
		fetchOrderByIdSuccess(state, action: { payload: Order }) {
			state.order = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		fetchOrderByIdFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		saveOrderStart(state, action: SaveOrderStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		saveOrderSuccess(state, action: { payload: Order }) {
			state.order = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		saveOrderFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		searchOrdersStart(state, action: SearchOrdersStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		searchOrdersSuccess(state, action: { payload: Order[] }) {
			state.orders = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		searchOrdersFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		setOrderProduct(state, action: { payload: OrderProduct; }) {
				state.orderProduct = action.payload;
		},
		resetOrders(state) {
			state.orders = [];
			state.order = null;
			state.isLoading = false;
			state.error = null;
		},
	},
});

// MARK: - Actions
export const {
	fetchAllOrdersStart,
	fetchAllOrdersSuccess,
	fetchAllOrdersFailed,
	fetchOrderByIdStart,
	fetchOrderByIdSuccess,
	fetchOrderByIdFailed,
	saveOrderStart,
	saveOrderSuccess,
	saveOrderFailed,
	searchOrdersStart,
	searchOrdersSuccess,
	searchOrdersFailed,
	setOrderProduct,
	resetOrders,
} = orderSlice.actions;

export default orderSlice.reducer;
