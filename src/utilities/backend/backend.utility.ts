import axios from 'axios';

export const BACKEND_URL =
	process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export enum Version {
	V1 = 'v1',
}

export const url = (path: string, version = Version.V1) =>
	`${BACKEND_URL}/${version}/${path}`;

export const createFormData = (object: Record<string, any>) => {
	const formData = new FormData();

	const appendFormData = (data: any, parentKey: string | null = null) => {
		if (data instanceof File) {
			formData.append(parentKey!, data);
		} else if (data && typeof data === 'object') {
			Object.entries(data).forEach(([key, value]) => {
				const formKey = parentKey ? `${parentKey}[${key}]` : key;
				appendFormData(value, formKey);
			});
		} else if (data !== null && data !== undefined) {
			formData.append(parentKey!, data.toString());
		}
	};

	Object.entries(object).forEach(([key, value]) => {
		appendFormData(value, key);
	});

	return formData;
};

export const uploadImages = async (
	images: File[],
	url: string,
	key: string
) => {
	if (images.length === 0) {
		return [];
	}
	const formData = new FormData();
	images.forEach((image) => formData.append(key, image));
	const response = await axios.post<string[]>(url, formData);
	return response.data;
};