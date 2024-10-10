import { createSelector } from 'reselect';
import { RootState } from '../store';
import { Customer } from './customer.types';

const selectCustomerSlice = (state: RootState) => state.customer;
export const selectCustomers = createSelector(
	[selectCustomerSlice],
	(slice) => slice.customers
);

export const selectCustomerIsLoading = createSelector(
	[selectCustomerSlice],
	(slice) => slice.isLoading
);

export const selectCustomerError = createSelector(
	[selectCustomerSlice],
	(slice) => slice.error
);

export const selectCustomerMap = createSelector(
	[selectCustomers],
	(customers) => {
		const customerMap = new Map<string, Customer>();
		for (const customer of customers) {
			customerMap.set(customer.id, customer);
		}
		return customerMap;
	}
);

export const selectCustomer = createSelector(
	[selectCustomerSlice],
	(slice) => slice.customer
);
