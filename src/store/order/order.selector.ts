import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectOrderSlice = (state: RootState) => state.order;

export const selectOrders = createSelector(
	[selectOrderSlice],
	(slice) => slice.orders
);

export const selectOrder = createSelector(
	[selectOrderSlice],
	(slice) => slice.order
);

export const selectCustomer = createSelector(
	[selectOrder],
	(slice) => slice.customer
);

export const selectDate = createSelector(
	[selectOrder],
	(slice) => slice.date
);

export const selectProducts = createSelector(
	[selectOrder],
	(slice) => slice.products
);

export const selectOrderIsLoading = createSelector(
	[selectOrderSlice],
	(slice) => slice.isLoading
);

export const selectOrderError = createSelector(
	[selectOrderSlice],
	(slice) => slice.error
);
