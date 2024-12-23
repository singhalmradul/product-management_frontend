import { combineReducers } from '@reduxjs/toolkit';
import { categoryReducer } from './category/category.slice';
import { productReducer } from './product/product.slice';
import orderReducer from './order/order.slice';
import { customerReducer } from './customer/customer.slice';

export const rootReducer = combineReducers({
	category: categoryReducer,
	product: productReducer,
	customer: customerReducer,
	order: orderReducer,
});
