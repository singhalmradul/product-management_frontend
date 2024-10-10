import { call, put, takeLatest, all, debounce } from 'typed-redux-saga/macro';
import {
	saveCustomer,
	deleteCustomer,
	fetchAllCustomers,
	fetchCustomerById,
	searchCustomers
} from '../../utilities/backend/customer-backend.utility';
import {
	saveCustomerFailed,
	saveCustomerStart,
	SaveCustomerStartAction,
	saveCustomerSuccess,
	fetchCustomersFailed,
	fetchCustomersStart,
	fetchCustomersSuccess,
	deleteCustomerFailed,
	deleteCustomerStart,
	DeleteCustomerStartAction,
	deleteCustomerSuccess,
	fetchCustomerByIdFailed,
	fetchCustomerByIdStart,
	FetchCustomerStartAction,
	fetchCustomerByIdSuccess,
	searchCustomersFailed,
	searchCustomersStart,
	SearchCustomersStartAction,
	searchCustomersSuccess,
} from './customer.slice';

// MARK: Workers
const fetchCustomersAsync = function* () {
	try {
		const customers = yield* call(fetchAllCustomers);
		yield put(fetchCustomersSuccess(customers));
	} catch (error) {
		yield put(fetchCustomersFailed(error as Error));
	}
};

const saveCustomerAsync = function* ({ payload }: SaveCustomerStartAction) {
	try {
		const customer = yield* call(saveCustomer, payload.customer, payload.id);
		yield put(saveCustomerSuccess(customer));
	} catch (error) {
		yield put(saveCustomerFailed(error as Error));
	}
};

const deleteCustomerAsync = function* ({ payload }: DeleteCustomerStartAction) {
	try {
		yield* call(deleteCustomer, payload);
		yield put(deleteCustomerSuccess(payload));
	} catch (error) {
		yield put(deleteCustomerFailed(error as Error));
	}
};

const fetchCustomerAsync = function* ({
	payload: id,
}: FetchCustomerStartAction) {
	try {
		const customer = yield* call(fetchCustomerById, id);
		yield put(fetchCustomerByIdSuccess(customer));
	} catch (error) {
		yield put(fetchCustomerByIdFailed(error as Error));
	}
};

const searchCustomersAsync = function* ({
	payload: query,
}: SearchCustomersStartAction) {
	try {
		const customers = yield* call(searchCustomers, query);
		yield put(searchCustomersSuccess(customers));
	} catch (error) {
		yield put(searchCustomersFailed(error as Error));
	}
}

// MARK: Watchers
const onFetchCustomers = function* () {
	yield* takeLatest(fetchCustomersStart, fetchCustomersAsync);
};

const onSaveCustomer = function* () {
	yield* takeLatest(saveCustomerStart, saveCustomerAsync);
};

const onDeleteCustomer = function* () {
	yield* takeLatest(deleteCustomerStart, deleteCustomerAsync);
};

const onFetchCustomer = function* () {
	yield* takeLatest(fetchCustomerByIdStart, fetchCustomerAsync);
};

const onSearchCustomers = function* () {
	yield* debounce(1000, searchCustomersStart, searchCustomersAsync);
};

// MARK: Saga
const customerSaga = function* () {
	yield* all([
		call(onFetchCustomers),
		call(onSaveCustomer),
		call(onDeleteCustomer),
		call(onFetchCustomer),
		call(onSearchCustomers),
	]);
};

export default customerSaga;
