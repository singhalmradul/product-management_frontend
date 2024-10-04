import { call, put, takeLatest, all, debounce } from 'typed-redux-saga/macro';
import {
	createProduct,
	deleteProduct,
	fetchAllProducts,
	fetchProductById,
	searchProducts,
} from '../../utilities/backend.utilitiy';
import {
	addProductFailure,
	addProductStart,
	AddProductStartAction,
	addProductSuccess,
	fetchProductByIdFailure,
	fetchProductsFailure,
	fetchProductsStart,
	fetchProductsSuccess,
	fetchProductByIdStart,
	FetchProductStartAction,
	fetchProductByIdSuccess,
	searchProductsStart,
	SearchProductsStartAction,
	deleteProductSuccess,
	deleteProductFailure,
	DeleteProductStartAction,
	deleteProductStart,
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
		const product = yield* call(createProduct, payload);
		yield put(addProductSuccess(product));
	} catch (error) {
		yield put(addProductFailure(error as Error));
	}
};

const fetchProductAsync = function* ({ payload: id }: FetchProductStartAction) {
	try {
		const product = yield* call(fetchProductById, id);
		yield put(fetchProductByIdSuccess(product));
	} catch (error) {
		yield put(fetchProductByIdFailure(error as Error));
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

const deleteProductAsync = function* ({ payload: id }: DeleteProductStartAction) {
	try {
		yield* call(deleteProduct, id);
		yield put(deleteProductSuccess(id));
	} catch (error) {
		yield put(deleteProductFailure(error as Error));
	}
}

// MARK: Observers
const onFetchProducts = function* () {
	yield* takeLatest(fetchProductsStart, fetchProductsAsync);
};

const onAddProduct = function* () {
	yield* takeLatest(addProductStart, addProductAsync);
};

const onFetchProduct = function* () {
	yield* takeLatest(fetchProductByIdStart, fetchProductAsync);
};

const onSearchProducts = function* () {
	yield* debounce(1000, searchProductsStart, searchProductsAsync);
};

const onDeleteProduct = function* () {
	yield* takeLatest(deleteProductStart, deleteProductAsync);
};

// MARK: Saga
const productSaga = function* () {
	yield* all([
		call(onFetchProducts),
		call(onAddProduct),
		call(onFetchProduct),
		call(onSearchProducts),
		call(onDeleteProduct),
	]);
};

export default productSaga;
