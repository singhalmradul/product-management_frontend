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

// MARK: - Slice
const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
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
