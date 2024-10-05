import { createSlice, UnknownAction } from '@reduxjs/toolkit';
import Category, {
	CategoryRequestObject,
	CategoryState,
} from './category.types';

const initialState: CategoryState = {
	category: null,
	categories: [],
	isLoading: false,
	error: null,
};

// MARK: - Action types
export type SaveCategoryStartAction = UnknownAction & {
	payload: {
		category: CategoryRequestObject;
		id?: string;
	};
};

export type FetchCategoryStartAction = UnknownAction & {
	payload: string;
};

export type SearchCategoriesStartAction = UnknownAction & {
	payload: string;
};

export type DeleteCategoryStartAction = UnknownAction & {
	payload: string;
};

// MARK: - Helper functions
const addCategory = (categories: Category[], category: Category) => {
	const index = categories.findIndex((c) => c.id === category.id);
	if (index !== -1) {
		return categories.map((c) => (c.id === category.id ? category : c));
	} else {
		return [...categories, category];
	}
};

const removeCategory = (categories: Category[], id: string) =>
	categories.filter((category) => category.id !== id);

// MARK: - Slice
const categorySlice = createSlice({
	name: 'category',
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
		fetchCategoriesFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		saveCategoryStart(state, action: SaveCategoryStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		saveCategorySuccess(state, action: { payload: Category }) {
			state.category = action.payload;
			state.isLoading = false;
			state.categories = addCategory(state.categories, action.payload);
		},
		saveCategoryFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		searchCategoriesStart(state, action: SearchCategoriesStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		searchCategoriesSuccess(state, action: { payload: Category[] }) {
			state.isLoading = false;
			state.categories = action.payload;
		},
		searchCategoriesFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		deleteCategoryStart(state, action: DeleteCategoryStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		deleteCategorySuccess(state, action: { payload: string }) {
			state.isLoading = false;
			state.categories = removeCategory(state.categories, action.payload);
		},
		deleteCategoryFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
		fetchCategoryByIdStart(state, action: FetchCategoryStartAction) {
			state.isLoading = true;
			state.error = null;
		},
		fetchCategoryByIdSuccess(state, action: { payload: Category }) {
			state.isLoading = false;
			state.category = action.payload;
		},
		fetchCategoryByIdFailed(state, action: { payload: Error }) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	fetchCategoriesFailed,
	saveCategoryStart,
	saveCategorySuccess,
	saveCategoryFailed,
	searchCategoriesStart,
	searchCategoriesSuccess,
	searchCategoriesFailed,
	deleteCategoryStart,
	deleteCategorySuccess,
	deleteCategoryFailed,
	fetchCategoryByIdStart,
	fetchCategoryByIdSuccess,
	fetchCategoryByIdFailed,
} = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
