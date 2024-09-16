import { combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './category/category.slice';
export const rootReducer = combineReducers({
	category: categoriesReducer,
});
