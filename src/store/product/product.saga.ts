import { call, put, takeLatest, all } from 'typed-redux-saga/macro';
import {
	addProduct,
	fetchAllProducts,
	fetchProductById,
} from '../../utilities/backend.utilitiy';
import {
	addProductFailure,
	addProductStart,
	AddProductStartAction,
	addProductSuccess,
	fetchProductFailure,
	fetchProductsFailure,
	fetchProductsStart,
	fetchProductsSuccess,
	fetchProductStart,
	FetchProductStartAction,
	fetchProductSuccess,
} from './product.slice';

const fetchProductsAsync = function* () {
	try {
		const products = yield* call(fetchAllProducts);
		yield put(fetchProductsSuccess(products));
	} catch (error) {
		yield put(fetchProductsFailure(error as Error));
	}
};

const addProductAsync = function* ({ payload }: AddProductStartAction) {
	console.log('product', payload);
	try {
		const product = yield* call(addProduct, payload);
		yield put(addProductSuccess(product));
	} catch (error) {
		yield put(addProductFailure(error as Error));
	}
};

const fetchProductAsync = function* ({ payload: id }: FetchProductStartAction) {
	try {
		const product = yield* call(fetchProductById, id);
		yield put(fetchProductSuccess(product));
	} catch (error) {
		yield put(fetchProductFailure(error as Error));
	}
};

const onFetchProducts = function* () {
	yield* takeLatest(fetchProductsStart.type, fetchProductsAsync);
};

const onAddProduct = function* () {
	yield* takeLatest(addProductStart.type, addProductAsync);
};

const onFetchProduct = function* () {
	yield* takeLatest(fetchProductStart.type, fetchProductAsync);
};

const productSaga = function* () {
	yield* all([call(onFetchProducts), call(onAddProduct), call(onFetchProduct)]);
};

export default productSaga;
