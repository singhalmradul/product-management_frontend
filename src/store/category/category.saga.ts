import { call, put, takeLatest, all, debounce } from 'typed-redux-saga/macro';
import {
	saveCategory,
	deleteCategory,
	fetchAllCategories,
	fetchCategoryById,
	searchCategories
} from '../../utilities/backend.utilitiy';
import {
	saveCategoryFailed,
	saveCategoryStart,
	SaveCategoryStartAction,
	saveCategorySuccess,
	fetchCategoriesFailed,
	fetchCategoriesStart,
	fetchCategoriesSuccess,
	deleteCategoryFailed,
	deleteCategoryStart,
	DeleteCategoryStartAction,
	deleteCategorySuccess,
	fetchCategoryByIdFailed,
	fetchCategoryByIdStart,
	FetchCategoryStartAction,
	fetchCategoryByIdSuccess,
	searchCategoriesFailed,
	searchCategoriesStart,
	SearchCategoriesStartAction,
	searchCategoriesSuccess,
} from './category.slice';

// MARK: Workers
const fetchCategoriesAsync = function* () {
	try {
		const categories = yield* call(fetchAllCategories);
		yield put(fetchCategoriesSuccess(categories));
	} catch (error) {
		yield put(fetchCategoriesFailed(error as Error));
	}
};

const saveCategoryAsync = function* ({ payload }: SaveCategoryStartAction) {
	try {
		const category = yield* call(saveCategory, payload.category, payload.id);
		yield put(saveCategorySuccess(category));
	} catch (error) {
		yield put(saveCategoryFailed(error as Error));
	}
};

const deleteCategoryAsync = function* ({ payload }: DeleteCategoryStartAction) {
	try {
		yield* call(deleteCategory, payload);
		yield put(deleteCategorySuccess(payload));
	} catch (error) {
		yield put(deleteCategoryFailed(error as Error));
	}
};

const fetchCategoryAsync = function* ({
	payload: id,
}: FetchCategoryStartAction) {
	try {
		const category = yield* call(fetchCategoryById, id);
		yield put(fetchCategoryByIdSuccess(category));
	} catch (error) {
		yield put(fetchCategoryByIdFailed(error as Error));
	}
};

const searchCategoriesAsync = function* ({
	payload: query,
}: SearchCategoriesStartAction) {
	try {
		const categories = yield* call(searchCategories, query);
		yield put(searchCategoriesSuccess(categories));
	} catch (error) {
		yield put(searchCategoriesFailed(error as Error));
	}
}

// MARK: Watchers
const onFetchCategories = function* () {
	yield* takeLatest(fetchCategoriesStart, fetchCategoriesAsync);
};

const onSaveCategory = function* () {
	yield* takeLatest(saveCategoryStart, saveCategoryAsync);
};

const onDeleteCategory = function* () {
	yield* takeLatest(deleteCategoryStart, deleteCategoryAsync);
};

const onFetchCategory = function* () {
	yield* takeLatest(fetchCategoryByIdStart, fetchCategoryAsync);
};

const onSearchCategories = function* () {
	yield* debounce(1000, searchCategoriesStart, searchCategoriesAsync);
};

// MARK: Saga
const categorySaga = function* () {
	yield* all([
		call(onFetchCategories),
		call(onSaveCategory),
		call(onDeleteCategory),
		call(onFetchCategory),
		call(onSearchCategories),
	]);
};

export default categorySaga;
