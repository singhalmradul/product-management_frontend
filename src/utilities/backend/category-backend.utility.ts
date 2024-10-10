import axios from 'axios';
import {
	Category,
	CategoryRequestObject,
} from '../../store/category/category.types';
import { uploadImages, url } from './backend.utility';

const categoriesUrl = url('categories');

export const fetchAllCategories = async () => {
	const response = await axios.get<Category[]>(categoriesUrl);
	return response.data;
};

export const addCategory = async (
	category: CategoryRequestObject
): Promise<Category> => {
	const response = await axios.post<Category>(categoriesUrl, category);
	const imageResponse = await uploadImages(
		category.newImages,
		`${categoriesUrl}/${response.data.id}/images`,
		'images'
	);
	return { ...response.data, images: imageResponse };
};

export const updateCategory = async (
	category: CategoryRequestObject,
	id: string
): Promise<Category> => {
	const response = await axios.put<Category>(
		`${categoriesUrl}/${id}`,
		category
	);
	const imageResponse = await uploadImages(
		category.newImages,
		`${categoriesUrl}/${id}/images`,
		'images'
	);
	return { ...response.data, images: imageResponse };
};

export const saveCategory = async (
	category: CategoryRequestObject,
	id?: string
): Promise<Category> => {
	if (id) {
		return updateCategory(category, id);
	}
	return addCategory(category);
};

export const fetchCategoryById = async (id: string) => {
	const response = await axios.get<Category>(`${categoriesUrl}/${id}`);
	return response.data;
};

export const searchCategories = async (query: string) => {
	const response = await axios.get<Category[]>(
		`${categoriesUrl}/search?query=${query}`
	);
	return response.data;
};

export const deleteCategory = async (id: string) => {
	await axios.delete(`${categoriesUrl}/${id}`);
};
