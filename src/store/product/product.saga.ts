import { call, put, takeLatest, all, debounce } from 'typed-redux-saga/macro';
import {
	deleteProduct,
	fetchAllProducts,
	fetchProductById,
	saveProduct,
	searchProducts,
} from '../../utilities/backend.utilitiy';
import {
	saveProductFailure,
	saveProductStart,
	SaveProductStartAction,
	saveProductSuccess,
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

const saveProductAsync = function* ({ payload }: SaveProductStartAction) {
	try {
		const product = yield* call(saveProduct, payload.product, payload.id);
		yield put(saveProductSuccess(product));
	} catch (error) {
		yield put(saveProductFailure(error as Error));
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
