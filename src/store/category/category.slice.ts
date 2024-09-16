import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import Category, { CategoryRequestObject, CategoryState } from './category.types';

const initialState: CategoryState = {
	categories: [],
	isLoading: false,
	error: null,
};

export type AddCategoryStartAction = UnknownAction & {
	payload: CategoryRequestObject;
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		fetchCategoriesStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchCategoriesSuccess(state, action: { payload: Category[] }) {
			state.isLoading = false;
			state.categories = action.payload;
		},
		fetchCategoriesFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		addCategoryStart(state, action: AddCategoryStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		addCategorySuccess(state, action: { payload: Category }) {
			state.isLoading = false;
			state.categories.push(action.payload);
		},
		addCategoryFailure(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	fetchCategoriesFailure,
	addCategoryStart,
	addCategorySuccess,
	addCategoryFailure,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
