import { call, put, takeLatest, all } from 'typed-redux-saga/macro';
import {
	addCategory,
	fetchAllCategories,
} from '../../utilities/backend.utilitiy';
import {
	addCategoryFailure,
	addCategoryStart,
	AddCategoryStartAction,
	addCategorySuccess,
	fetchCategoriesFailure,
	fetchCategoriesStart,
	fetchCategoriesSuccess,
} from './category.slice';

const fetchCategoriesAsync = function* () {
	try {
		const categories = yield* call(fetchAllCategories);
		yield put(fetchCategoriesSuccess(categories));
	} catch (error) {
		yield put(fetchCategoriesFailure(error as Error));
	}
};

const addCategoryAsync = function* ({ payload }: AddCategoryStartAction) {
	try {
		const category = yield* call(addCategory, payload);
		yield put(addCategorySuccess(category));
	} catch (error) {
		yield put(addCategoryFailure(error as Error));
	}
};

const onFetchCategories = function* () {
	yield* takeLatest(fetchCategoriesStart, fetchCategoriesAsync);
};

const onAddCategory = function* () {
	yield* takeLatest(addCategoryStart, addCategoryAsync);
};

const categorySaga = function* () {
	yield* all([call(onFetchCategories), call(onAddCategory)]);
};

export default categorySaga;
