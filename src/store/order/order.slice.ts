import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import { OrderProduct, OrderState } from './order.types';
import { QuantityUnit } from '../types';

// MARK: - Initial State
const initialState: OrderState = {
	products: [],
	isLoading: false,
	error: null,
};

// MARK: - Helper Functions
export type AddProductStartAction = UnknownAction & {
	payload: string;
};

const filterProduct = (state: OrderState, id: string) =>
	state.products.filter((orderProduct) => orderProduct.product.id !== id);

const modifyAmount = (
	state: OrderState,
	{ id, amount }: { id: string; amount: number }
) =>
	state.products.map((orderProduct) =>
		orderProduct.product.id === id
			? {
					...orderProduct,
					quantity: { ...orderProduct.quantity, amount },
			  }
			: orderProduct
	);

const modifyUnit = (
	state: OrderState,
	{ id, unit }: { id: string; unit: QuantityUnit }
) =>
	state.products.map((orderProduct) =>
		orderProduct.product.id === id
			? {
					...orderProduct,
					quantity: { ...orderProduct.quantity, unit },
			  }
			: orderProduct
	);

// MARK: - Slice
const orderSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProductStart(state, action: AddProductStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		addProductSuccess(state, action: { payload: OrderProduct }) {
			state.isLoading = false;
			state.products.push(action.payload);
		},
		addProductFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		removeProduct(state, action: { payload: string }) {
			state.products = filterProduct(state, action.payload);
		},
		modifyQuantityAmount(
			state,
			action: { payload: { id: string; amount: number } }
		) {
			state.products = modifyAmount(state, action.payload);
		},
		modifyQuantityUnit(
			state,
			action: { payload: { id: string; unit: QuantityUnit } }
		) {
			state.products = modifyUnit(state, action.payload);
		},
	},
});

// MARK: - Actions
export const {
	addProductStart,
	addProductSuccess,
	addProductFailure,
	removeProduct,
	modifyQuantityAmount,
	modifyQuantityUnit,
} = orderSlice.actions;

export default orderSlice.reducer;
