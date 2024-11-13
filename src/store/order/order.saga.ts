import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import {
	SaveOrderStartAction,
	saveOrderSuccess,
	saveOrderFailed,
	saveOrderStart,
	fetchAllOrdersSuccess,
	fetchAllOrdersStart,
	FetchOrderByIdStart,
	fetchOrderByIdStart,
	fetchAllOrdersFailed,
	fetchOrderByIdFailed,
} from './order.slice';
import {
	fetchAllOrders,
	fetchOrderById,
	getOrderPdf,
	saveOrder,
} from '../../utilities/backend/order-backend.utility';

const saveOrderAsync = function* ({ payload }: SaveOrderStartAction) {
	try {
		const order = yield* call(saveOrder, payload.order, payload.id);
		const pdf = yield* call(getOrderPdf, order.id);
		yield* put(saveOrderSuccess({ ...order, pdf }));
	} catch (error) {
		yield* put(saveOrderFailed(error as Error));
	}
};

const fetchAllOrdersAsync = function* () {
	try {
		const orders = yield* call(fetchAllOrders);
		yield* put(fetchAllOrdersSuccess(orders));
	} catch (error) {
		yield* put(fetchAllOrdersFailed(error as Error));
	}
};

const fetchOrderByIdAsync = function* ({ payload }: FetchOrderByIdStart) {
	try {
		const order = yield* call(fetchOrderById, payload);
		yield* put(saveOrderSuccess(order));
	} catch (error) {
		yield* put(fetchOrderByIdFailed(error as Error));
	}
};

const onFetchAllOrdersStart = function* () {
	yield* takeLatest(fetchAllOrdersStart, fetchAllOrdersAsync);
};

const onSaveOrderStart = function* () {
	yield* takeLatest(saveOrderStart, saveOrderAsync);
};

const onFetchOrderByIdStart = function* () {
	yield* takeLatest(fetchOrderByIdStart, fetchOrderByIdAsync);
};

const orderSaga = function* () {
	yield* all([
		call(onSaveOrderStart),
		call(onFetchAllOrdersStart),
		call(onFetchOrderByIdStart),
	]);
};

export default orderSaga;
