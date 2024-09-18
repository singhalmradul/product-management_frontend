import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductSlice = (state: RootState) => state.product;
export const selectProducts = createSelector(
	[selectProductSlice],
	(slice) => slice.products
);

export const selectProductIsLoading = createSelector(
	[selectProductSlice],
	(slice) => slice.isLoading
);

export const selectProductError = createSelector(
	[selectProductSlice],
	(slice) => slice.error
);

export const selectProduct = createSelector(
	[selectProductSlice],
	(slice) => slice.product
);