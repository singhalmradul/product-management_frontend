import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectOrderSlice = (state: RootState) => state.order;
export const selectProducts = createSelector(
	[selectOrderSlice],
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