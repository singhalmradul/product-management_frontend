import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import {
	SaveOrderStartAction,
	saveOrderSuccess,
	saveOrderFailed,
	saveOrderStart,
} from './order.slice';
import {
	getOrderPdf,
	saveOrder,
} from '../../utilities/backend/order-backend.utility';

const saveOrderAsync = function* ({ payload }: SaveOrderStartAction) {
	try {
		const order = yield* call(saveOrder, payload.order, payload.id);
		const pdf = yield* call(getOrderPdf, order.id);
		yield put(saveOrderSuccess({ ...order, pdf }));
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
