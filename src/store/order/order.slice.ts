import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import { OrderProduct, OrderState } from './order.types';
import { QuantityUnit } from '../types';

// MARK: - Initial State
const initialState: OrderState = {
	customer: '',
	date: new Date().toISOString().split('T')[0],
	products: [],
	isLoading: false,
	error: null,
};

// MARK: - Helper Functions
const filterProduct = (products: OrderProduct[], id: string) =>
	products.filter((orderProduct) => orderProduct.product.id !== id);

const modifyAmount = (
	products: OrderProduct[],
	{ id, amount }: { id: string; amount: number }
) =>
	products.map((orderProduct) =>
		orderProduct.product.id === id
			? {
					...orderProduct,
					quantity: { ...orderProduct.quantity, amount },
			  }
			: orderProduct
	);

const modifyUnit = (
	products: OrderProduct[],
	{ id, unit }: { id: string; unit: QuantityUnit }
) =>
	products.map((orderProduct) =>
		orderProduct.product.id === id
			? {
					...orderProduct,
					quantity: { ...orderProduct.quantity, unit },
			  }
			: orderProduct
	);

// MARK: - Types
export type AddProductStartAction = UnknownAction & {
	payload: string;
};

type ModifyQuantityAmountAction = UnknownAction & {
	payload: { id: string; amount: number };
};

type ModifyQuantityUnitAction = UnknownAction & {
	payload: { id: string; unit: QuantityUnit };
};

// MARK: - Slice
const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setCustomer(state, action: { payload: string }) {
			state.customer = action.payload;
		},
		setDate(state, action: { payload: string }) {
			state.date = action.payload;
		},
		addProductStart(state, action: AddProductStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		addProductSuccess(state, action: { payload: OrderProduct }) {
			state.isLoading = false;
			state.products.push(action.payload);
		},
		addProductFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		removeProduct(state, action: { payload: string }) {
			state.products = filterProduct(state.products, action.payload);
		},
		modifyQuantityAmount(state, action: ModifyQuantityAmountAction) {
			state.products = modifyAmount(state.products, action.payload);
		},
		modifyQuantityUnit(state, action: ModifyQuantityUnitAction) {
			state.products = modifyUnit(state.products, action.payload);
		},
	},
});

// MARK: - Actions
export const {
	setCustomer,
	setDate,
	addProductStart,
	addProductSuccess,
	addProductFailed,
	removeProduct,
	modifyQuantityAmount,
	modifyQuantityUnit,
} = orderSlice.actions;

export default orderSlice.reducer;
