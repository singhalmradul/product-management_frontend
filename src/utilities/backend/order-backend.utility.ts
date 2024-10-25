import axios from 'axios';
import {
	Order,
	OrderRequestObject,
} from '../../store/order/order.types';
import {  url } from './backend.utility';

const ordersUrl = url('orders');

export const fetchAllOrders = async () => {
	const response = await axios.get<Order[]>(ordersUrl);
	return response.data;
};

export const addOrder = async (
	order: OrderRequestObject
): Promise<Order> => {
	const response = await axios.post<Order>(ordersUrl, {
		...order,
	});
	return response.data;
};

export const updateOrder = async (
	order: OrderRequestObject,
	id: string
): Promise<Order> => {
	const response = await axios.put<Order>(`${ordersUrl}/${id}`, order);
	return response.data;
};

export const saveOrder = async (
	order: OrderRequestObject,
	id?: string
): Promise<Order> => {
	if (id) {
		return updateOrder(order, id);
	}
	return addOrder(order);
};

export const getOrderPdf = async (id: string): Promise<string> => {
	const response = await axios.get<Blob>(`${ordersUrl}/${id}/pdf`, {
		responseType: 'blob'
	});
	const url: string = window.URL.createObjectURL(response.data);
	return url;
};

export const fetchOrderById = async (id: string) => {
	const response = await axios.get<Order>(`${ordersUrl}/${id}`);
	return response.data;
};

export const searchOrders = async (query: string) => {
	const response = await axios.get<Order[]>(
		`${ordersUrl}/search?query=${query}`
	);
	return response.data;
};

export const deleteOrder = async (id: string) => {
	await axios.delete(`${ordersUrl}/${id}`);
};
