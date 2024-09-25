import { combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './category/category.slice';
import productReducer from './product/product.slice';
import orderReducer from './order/order.slice';

export const rootReducer = combineReducers({
	category: categoriesReducer,
	product: productReducer,
	order: orderReducer,
});
