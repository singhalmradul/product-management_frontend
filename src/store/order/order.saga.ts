import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import {
	SaveOrderStartAction,
	saveOrderSuccess,
	saveOrderFailed,
	saveOrderStart,
} from './order.slice';
import { saveOrder } from '../../utilities/backend/order-backend.utility';

const saveOrderAsync = function* ({ payload }: SaveOrderStartAction) {
	try {
		const savedOrder = yield* call(saveOrder, payload.order, payload.id);
		yield put(saveOrderSuccess(savedOrder));
	} catch (error) {
		yield put(saveOrderFailed(error as Error));
	}
};

const onSaveOrderStart = function* () {
	yield* takeLatest(saveOrderStart, saveOrderAsync);
};

const orderSaga = function* () {
	yield* all([call(onSaveOrderStart)]);
};

export default orderSaga;
