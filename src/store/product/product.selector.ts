import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductSlice = (state: RootState) => state.product;
export const selectProducts = createSelector(
	[selectProductSlice],
	(slice) => slice.products
);

export const selectIsLoading = createSelector(
	[selectProductSlice],
	(slice) => slice.isLoading
);
