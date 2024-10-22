import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import { Order, OrderProduct, OrderState } from './order.types';
import { QuantityUnit } from '../types';
import { Product } from '../product/product.types';
import { Customer } from '../customer/customer.types';

// MARK: - Initial State
const initialState: OrderState = {
	orders: [],
	order: {
		customer: null,
		date: new Date().toISOString().split('T')[0],
		products: [],
	},
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

const addProductToOrder = (
	products: OrderProduct[],
	product: Product
): OrderProduct[] => {
	products.push({
		product,
		quantity: { amount: 1, unit: product.unitPreference },
	});
	return products;
};

// MARK: - Types
type SetCustomerAction = UnknownAction & {
	payload: Customer;
};

export type AddProductByIdStartAction = UnknownAction & {
	payload: string;
};

type AddProductAction = UnknownAction & {
	payload: Product;
};

type ModifyQuantityAmountAction = UnknownAction & {
	payload: { id: string; amount: number };
};

type ModifyQuantityUnitAction = UnknownAction & {
	payload: { id: string; unit: QuantityUnit };
};

type SearchOrdersStartAction = UnknownAction & {
	payload: string;
};

// MARK: - Slice
const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setCustomer(state, action: SetCustomerAction) {
			state.order.customer = action.payload;
		},
		setDate(state, action: { payload: string }) {
			state.order.date = action.payload;
		},
		addProductByIdStart(state, action: AddProductByIdStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		addProduct(state, action: AddProductAction) {
			state.order = {
				...state.order,
				products: state.order?.products || [],
			};
			state.order.products = addProductToOrder(
				state.order.products,
				action.payload
			);
			state.isLoading = true;
			state.error = null;
		},
		addProductSuccess(state, action: { payload: OrderProduct }) {
			state.isLoading = false;
			state.order.products.push(action.payload);
		},
		addProductFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		removeProduct(state, action: { payload: string }) {
			state.order.products = filterProduct(
				state.order.products,
				action.payload
			);
		},
		modifyQuantityAmount(state, action: ModifyQuantityAmountAction) {
			state.order.products = modifyAmount(state.order.products, action.payload);
		},
		modifyQuantityUnit(state, action: ModifyQuantityUnitAction) {
			state.order.products = modifyUnit(state.order.products, action.payload);
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
		resetOrders(state) {
			state.orders = [];
			state.order = initialState.order;
			state.isLoading = false;
			state.error = null;
		},
	},
});

// MARK: - Actions
export const {
	setCustomer,
	setDate,
	addProductByIdStart,
	addProduct,
	addProductSuccess,
	addProductFailed,
	removeProduct,
	modifyQuantityAmount,
	modifyQuantityUnit,
	searchOrdersStart,
	searchOrdersSuccess,
	searchOrdersFailed,
	resetOrders,
} = orderSlice.actions;

export default orderSlice.reducer;
