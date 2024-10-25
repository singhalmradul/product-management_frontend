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

export const selectProducts = createSelector(
	[selectOrder],
	(order) => order?.products ?? []
);

export const selectOrderProduct = createSelector(
	[selectOrderSlice],
	(slice) => slice.orderProduct
);

export const selectOrderIsLoading = createSelector(
	[selectOrderSlice],
	(slice) => slice.isLoading
);

export const selectOrderError = createSelector(
	[selectOrderSlice],
	(slice) => slice.error
);
