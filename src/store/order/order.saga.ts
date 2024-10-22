import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import {
	addProductFailed,
	addProductByIdStart,
	AddProductByIdStartAction,
	addProductSuccess,
} from './order.slice';
import { fetchProductById } from '../../utilities/backend/product-backend.utility';

const addProductAsync = function* ({ payload: id }: AddProductByIdStartAction) {
	try {
		const product = yield* call(fetchProductById, id);
		yield put(
			addProductSuccess({
				product,
				quantity: { amount: 1, unit: product.unitPreference },
			})
		);
	} catch (error) {
		yield put(addProductFailed(error as Error));
	}
};

const onAddProductStart = function* () {
	yield* takeLatest(addProductByIdStart, addProductAsync);
};

const orderSaga = function* () {
	yield* all([call(onAddProductStart)]);
};

export default orderSaga;
