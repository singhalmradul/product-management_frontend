import axios from 'axios';
import Category, {
	CategoryRequestObject,
} from '../store/category/category.types';
import Product, { ProductRequestObject } from '../store/product/product.types';

const BACKEND_URL =
	process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080/api/v1';

const url = (path: string) => `${BACKEND_URL}/${path}`;
const categoriesUrl = url('categories');
const productsUrl = url('products');

// const createFormData = (object: Record<string, any>) => {
// 	const formData = new FormData();

// 	const appendFormData = (data: any, parentKey: string | null = null) => {
// 		if (data instanceof File) {
// 			formData.append(parentKey!, data);
// 		} else if (data && typeof data === 'object') {
// 			Object.entries(data).forEach(([key, value]) => {
// 				const formKey = parentKey ? `${parentKey}[${key}]` : key;
// 				appendFormData(value, formKey);
// 			});
// 		} else if (data !== null && data !== undefined) {
// 			formData.append(parentKey!, data.toString());
// 		}
// 	};

// 	Object.entries(object).forEach(([key, value]) => {
// 		appendFormData(value, key);
// 	});

// 	return formData;
// };

export const fetchAllCategories = async () => {
	const response = await axios.get<Category[]>(categoriesUrl);
	return response.data;
};

export const addCategory = async (
	category: CategoryRequestObject
): Promise<Category> => {
	const response = await axios.post<Category>(categoriesUrl, {
		...category,
		images: [],
	});
	const imageResponse = await uploadImages(
		category.newImages,
		response.data.id,
		categoriesUrl
	);
	return { ...response.data, images: imageResponse };
};

export const updateCategory = async(
	category: CategoryRequestObject,
	id: string
): Promise<Category> => {
	const response = await axios.put<Category>(`${categoriesUrl}/${id}`, category);
	const imageResponse = await uploadImages(
		category.newImages,
		response.data.id,
		categoriesUrl
	);
	return { ...response.data, images: imageResponse };
}

export const saveCategory = async (
	category: CategoryRequestObject,
	id?: string
): Promise<Category> => {
	if (id) {
		return updateCategory(category, id);
	}
	return addCategory(category);
};

export const fetchAllProducts = async () => {
	const response = await axios.get<Product[]>(productsUrl);
	return response.data;
};

export const fetchProductById = async (id: string) => {
	const response = await axios.get<Product>(`${productsUrl}/${id}`);
	return response.data;
};

export const fetchCategoryById = async (id: string) => {
	const response = await axios.get<Category>(`${categoriesUrl}/${id}`);
	return response.data;
};

const uploadImages = async (images: File[], id: string, url: string) => {
	if (images.length === 0) {
		return [];
	}
	const formData = new FormData();
	images.forEach((image) => formData.append('images', image));
	const response = await axios.post<string[]>(`${url}/${id}/images`, formData);
	return response.data;
};

export const createProduct = async (
	product: ProductRequestObject
): Promise<Product> => {
	const response = await axios.post<Product>(productsUrl, {
		...product,
		images: [],
	});
	const imageResponse = await uploadImages(
		product.newImages,
		response.data.id,
		productsUrl
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
		response.data.id,
		productsUrl
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

export const searchCategories = async (query: string) => {
	const response = await axios.get<Category[]>(
		`${categoriesUrl}/search?query=${query}`
	);
	return response.data;
}

export const deleteCategory = async (id: string) => {
	await axios.delete(`${categoriesUrl}/${id}`);
};

export const deleteProduct = async (id: string) => {
	await axios.delete(`${productsUrl}/${id}`);
};
