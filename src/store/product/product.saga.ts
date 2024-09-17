import { call, put, takeLatest, all } from 'typed-redux-saga/macro';
import {
	addProduct,
	fetchAllProducts,
} from '../../utilities/backend.utilitiy';
import {
	addProductFailure,
	addProductStart,
	AddProductStartAction,
	addProductSuccess,
	fetchCProductsFailure,
	fetchProductsStart,
	fetchProductsSuccess,
} from './product.slice';

const fetchProductAsync = function* () {
	try {
		const categories = yield* call(fetchAllProducts);
		yield put(fetchProductsSuccess(categories));
	} catch (error) {
		yield put(fetchCProductsFailure(error as Error));
	}
};

const addCategoryAsync = function* ({ payload }: AddProductStartAction) {
	try {
		const product = yield* call(addProduct, payload);
		yield put(addProductSuccess(product));
	} catch (error) {
		yield put(addProductFailure(error as Error));
	}
};

const onFetchProducts = function* () {
	yield* takeLatest(fetchProductsStart.type, fetchProductAsync);
};

const onAddProduct = function* () {
	yield* takeLatest(addProductStart.type, addCategoryAsync);
};

const productSaga = function* () {
	yield* all([call(onFetchProducts), call(onAddProduct)]);
};

export default productSaga;
