import { all, call } from 'typed-redux-saga/macro';
import categorySaga from './category/category.saga';
import productSaga from './product/product.saga';
import orderSaga from './order/order.saga';
import customerSaga from './customer/customer.saga';

export function* rootSaga() {
	yield* all([
		call(categorySaga),
		call(productSaga),
		call(orderSaga),
		call(customerSaga),
	]);
}
