import axios from 'axios';
import Category, {
	CategoryRequestObject,
} from '../store/category/category.types';

const API_URL = 'http://localhost:8080/api/v1';

const url = (path: string) => `${API_URL}/${path}`;
const categoriesUrl = url('categories');

export const fetchAllCategories = async () => {
	const response = await axios.get<Category[]>(categoriesUrl);
	console.log(response.data);
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
