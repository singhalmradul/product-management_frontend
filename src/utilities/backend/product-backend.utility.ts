import axios from 'axios';
import {Product, ProductRequestObject } from '../../store/product/product.types';
import { uploadImages, url } from './backend.utility';


const productsUrl =url('products');

export const fetchAllProducts = async () => {
	const response = await axios.get<Product[]>(productsUrl);
	return response.data;
};

export const fetchProductById = async (id: string) => {
	const response = await axios.get<Product>(`${productsUrl}/${id}`);
	return response.data;
};

export const fetchProductByCode = async (code: string) => {
	const response = await axios.get<Product>(`${productsUrl}/code/${code}`);
	return response.data;
};

export const createProduct = async (
	product: ProductRequestObject
): Promise<Product> => {
	const response = await axios.post<Product>(productsUrl, product);
	const imageResponse = await uploadImages(
		product.newImages,
		`${productsUrl}/${response.data.id}/images`,
		'images'
	);
	return { ...response.data, images: imageResponse };
};

export const updateProduct = async (
	product: ProductRequestObject,
	id: string
): Promise<Product> => {
	const response = await axios.put<Product>(`${productsUrl}/${id}`, product);
	const imageResponse = await uploadImages(
		product.newImages,
		`${productsUrl}/${id}/images`,
		'images'
	);
	return { ...response.data, images: imageResponse };
};

export const saveProduct = async (
	product: ProductRequestObject,
	id?: string
): Promise<Product> => {
	if (id) {
		return updateProduct(product, id);
	}
	return createProduct(product);
};

export const searchProducts = async (query: string) => {
	const response = await axios.get<Product[]>(
		`${productsUrl}/search?query=${query}`
	);
	return response.data;
};

export const deleteProduct = async (id: string) => {
	await axios.delete(`${productsUrl}/${id}`);
};
