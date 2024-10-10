import { call, put, takeLatest, all, debounce } from 'typed-redux-saga/macro';
import {
	deleteProduct,
	fetchAllProducts,
	fetchProductById,
	saveProduct,
	searchProducts,
} from '../../utilities/backend/product-backend.utility';
import {
	saveProductFailed,
	saveProductStart,
	SaveProductStartAction,
	saveProductSuccess,
	fetchProductByIdFailed,
	fetchProductsFailed,
	fetchProductsStart,
	fetchProductsSuccess,
	fetchProductByIdStart,
	FetchProductStartAction,
	fetchProductByIdSuccess,
	searchProductsStart,
	SearchProductsStartAction,
	deleteProductSuccess,
	deleteProductFailed,
	DeleteProductStartAction,
	deleteProductStart,
} from './product.slice';

// MARK: Workers
const fetchProductsAsync = function* () {
	try {
		const products = yield* call(fetchAllProducts);
		yield put(fetchProductsSuccess(products));
	} catch (error) {
		yield put(fetchProductsFailed(error as Error));
	}
};

const saveProductAsync = function* ({ payload }: SaveProductStartAction) {
	try {
		const product = yield* call(saveProduct, payload.product, payload.id);
		yield put(saveProductSuccess(product));
	} catch (error) {
		yield put(saveProductFailed(error as Error));
	}
};

const fetchProductAsync = function* ({ payload: id }: FetchProductStartAction) {
	try {
		const product = yield* call(fetchProductById, id);
		yield put(fetchProductByIdSuccess(product));
	} catch (error) {
		yield put(fetchProductByIdFailed(error as Error));
	}
};

const searchProductsAsync = function* ({
	payload: query,
}: SearchProductsStartAction) {
	try {
		const products = yield* call(searchProducts, query);
		yield put(fetchProductsSuccess(products));
	} catch (error) {
		yield put(fetchProductsFailed(error as Error));
	}
};

const deleteProductAsync = function* ({ payload: id }: DeleteProductStartAction) {
	try {
		yield* call(deleteProduct, id);
		yield put(deleteProductSuccess(id));
	} catch (error) {
		yield put(deleteProductFailed(error as Error));
	}
}

// MARK: Watchers
const onFetchProducts = function* () {
	yield* takeLatest(fetchProductsStart, fetchProductsAsync);
};

const onAddProduct = function* () {
	yield* takeLatest(saveProductStart, saveProductAsync);
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
