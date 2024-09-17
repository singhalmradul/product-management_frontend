import { all, call } from 'typed-redux-saga/macro';
import categorySaga from './category/category.saga';
import productSaga from './product/product.saga';

export function* rootSaga() {
	yield* all([
		call(categorySaga),
		call(productSaga),
	]);
}
