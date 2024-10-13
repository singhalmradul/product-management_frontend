import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import {
	Customer,
	CustomerRequestObject,
	CustomerState,
} from './customer.types';

const initialState: CustomerState = {
	customer: null,
	customers: [],
	isLoading: false,
	error: null,
};

// MARK: - Action types
export type SaveCustomerStartAction = UnknownAction & {
	payload: {
		customer: CustomerRequestObject;
		id?: string;
	};
};

export type FetchCustomerStartAction = UnknownAction & {
	payload: string;
};

export type SearchCustomersStartAction = UnknownAction & {
	payload: string;
};

export type DeleteCustomerStartAction = UnknownAction & {
	payload: string;
};

// MARK: - Helper functions
const addCustomer = (customers: Customer[], customer: Customer) => {
	const index = customers.findIndex((c) => c.id === customer.id);
	if (index !== -1) {
		return customers.map((c) => (c.id === customer.id ? customer : c));
	} else {
		return [...customers, customer];
	}
};

const removeCustomer = (customers: Customer[], id: string) =>
	customers.filter((customer) => customer.id !== id);

// MARK: - Slice
const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		fetchCustomersStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchCustomersSuccess(state, action: { payload: Customer[] }) {
			state.isLoading = false;
			state.customers = action.payload;
		},
		fetchCustomersFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		saveCustomerStart(state, action: SaveCustomerStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		saveCustomerSuccess(state, action: { payload: Customer }) {
			state.customer = action.payload;
			state.isLoading = false;
			state.customers = addCustomer(state.customers, action.payload);
		},
		saveCustomerFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		searchCustomersStart(state, action: SearchCustomersStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		searchCustomersSuccess(state, action: { payload: Customer[] }) {
			state.isLoading = false;
			state.customers = action.payload;
		},
		searchCustomersFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		deleteCustomerStart(state, action: DeleteCustomerStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		deleteCustomerSuccess(state, action: { payload: string }) {
			state.isLoading = false;
			state.customers = removeCustomer(state.customers, action.payload);
		},
		deleteCustomerFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		fetchCustomerByIdStart(state, action: FetchCustomerStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		fetchCustomerByIdSuccess(state, action: { payload: Customer }) {
			state.isLoading = false;
			state.customer = action.payload;
		},
		fetchCustomerByIdFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		resetCustomers(state) {
			state.isLoading = false;
			state.error = null;
			state.customers = [];
		}
	},
});

export const {
	fetchCustomersStart,
	fetchCustomersSuccess,
	fetchCustomersFailed,
	saveCustomerStart,
	saveCustomerSuccess,
	saveCustomerFailed,
	searchCustomersStart,
	searchCustomersSuccess,
	searchCustomersFailed,
	deleteCustomerStart,
	deleteCustomerSuccess,
	deleteCustomerFailed,
	fetchCustomerByIdStart,
	fetchCustomerByIdSuccess,
	fetchCustomerByIdFailed,
	resetCustomers,
} = customerSlice.actions;

export const customerReducer = customerSlice.reducer;
