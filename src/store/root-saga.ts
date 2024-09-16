import { all, call } from 'typed-redux-saga/macro';
import categorySaga from './category/category.saga';

export function* rootSaga() {
	yield* all([
		call(categorySaga),
	]);
}
