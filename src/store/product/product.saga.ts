import { call, put, takeLatest, all, debounce } from 'typed-redux-saga/macro';
import {
	addProduct,
	fetchAllProducts,
	fetchProductById,
	searchProducts,
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
	searchProductsStart,
	SearchProductsStartAction,
} from './product.slice';

// MARK: Workers
const fetchProductsAsync = function* () {
	try {
		const products = yield* call(fetchAllProducts);
		yield put(fetchProductsSuccess(products));
	} catch (error) {
		yield put(fetchProductsFailure(error as Error));
	}
};

const addProductAsync = function* ({ payload }: AddProductStartAction) {
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

const searchProductsAsync = function* ({
	payload: query,
}: SearchProductsStartAction) {
	try {
		const products = yield* call(searchProducts, query);
		yield put(fetchProductsSuccess(products));
	} catch (error) {
		yield put(fetchProductsFailure(error as Error));
	}
};

// MARK: Observers
const onFetchProducts = function* () {
	yield* takeLatest(fetchProductsStart, fetchProductsAsync);
};

const onAddProduct = function* () {
	yield* takeLatest(addProductStart, addProductAsync);
};

const onFetchProduct = function* () {
	yield* takeLatest(fetchProductStart, fetchProductAsync);
};

const onSearchProducts = function* () {
	yield* debounce(1000, searchProductsStart, searchProductsAsync);
};

// MARK: Saga
const productSaga = function* () {
	yield* all([
		call(onFetchProducts),
		call(onAddProduct),
		call(onFetchProduct),
		call(onSearchProducts),
	]);
};

export default productSaga;
