import axios from 'axios';
import Category, {
	CategoryRequestObject,
} from '../store/category/category.types';
import Product, { ProductRequestObject } from '../store/product/product.types';

const API_URL = 'http://localhost:8080/api/v1';

const url = (path: string) => `${API_URL}/${path}`;
const categoriesUrl = url('categories');
const productsUrl = url('products');

export const fetchAllCategories = async () => {
	const response = await axios.get<Category[]>(categoriesUrl);
	return response.data;
};

export const addCategory = async (category: CategoryRequestObject) => {
	const response = await axios.post<Category>(categoriesUrl, {
		...category,
		images: [],
	});
	const formData = new FormData();
	category.images.forEach((image) => formData.append('images', image));
	const imageResponse = await axios.post<string[]>(
		`${categoriesUrl}/${response.data.id}/images`,
		formData
	);
	return { ...response.data, images: imageResponse.data };
};

export const fetchAllProducts = async () => {
	const response = await axios.get<Product[]>(productsUrl);
	return response.data;
};

export const addProduct = async (product: ProductRequestObject) => {
	const response = await axios.post<Product>(productsUrl, {
		...product,
		images: [],
	});
	const formData = new FormData();
	product.images.forEach((image) => formData.append('images', image));
	const imageResponse = await axios.post<string[]>(
		`${productsUrl}/${response.data.id}/images`,
		formData
	);
	return { ...response.data, images: imageResponse.data };
};
