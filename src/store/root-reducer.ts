import { combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './category/category.slice';
import productReducer from './product/product.slice';

export const rootReducer = combineReducers({
	category: categoriesReducer,
	product: productReducer,
});
