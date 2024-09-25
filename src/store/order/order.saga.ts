import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import {
	addProductFailure,
	addProductStart,
	AddProductStartAction,
	addProductSuccess,
} from './order.slice';
import { fetchProductById } from '../../utilities/backend.utilitiy';

const addProductAsync = function* ({ payload: id }: AddProductStartAction) {
	try {
		const product = yield* call(fetchProductById, id);
		yield put(
			addProductSuccess({
				product,
				quantity: { amount: 1, unit: product.unitPreference },
			})
		);
	} catch (error) {
		yield put(addProductFailure(error as Error));
	}
};

const onAddProductStart = function* () {
	yield* takeLatest(addProductStart, addProductAsync);
};

const orderSaga = function* () {
	yield* all([call(onAddProductStart)]);
};

export default orderSaga;
