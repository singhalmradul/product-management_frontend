import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectCategorySlice = (state: RootState) => state.category;
export const selectCategories = createSelector(
	[selectCategorySlice],
	(slice) => slice.categories
);

export const selectIsLoading = createSelector(
	[selectCategorySlice],
	(slice) => slice.isLoading
);
