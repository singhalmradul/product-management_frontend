import { createSelector } from 'reselect';
import { RootState } from '../store';
import Category from './category.types';

const selectCategorySlice = (state: RootState) => state.category;
export const selectCategories = createSelector(
	[selectCategorySlice],
	(slice) => slice.categories
);

export const selectCategoryIsLoading = createSelector(
	[selectCategorySlice],
	(slice) => slice.isLoading
);

export const selectCategoryError = createSelector(
	[selectCategorySlice],
	(slice) => slice.error
);

export const selectCategoryMap = createSelector(
	[selectCategories],
	(categories) => {
		const categoryMap = new Map<string, Category>();
		for (const category of categories) {
			categoryMap.set(category.id, category);
		}
		return categoryMap;
	}
);

export const selectCategory = createSelector(
	[selectCategorySlice],
	(slice) => slice.category
);