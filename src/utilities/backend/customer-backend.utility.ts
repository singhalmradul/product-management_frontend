import axios from 'axios';
import {
	Customer,
	CustomerRequestObject,
} from '../../store/customer/customer.types';
import {  url } from './backend.utility';

const customersUrl = url('customers');

export const fetchAllCustomers = async () => {
	const response = await axios.get<Customer[]>(customersUrl);
	return response.data;
};

export const addCustomer = async (
	customer: CustomerRequestObject
): Promise<Customer> => {
	const response = await axios.post<Customer>(customersUrl, {
		...customer,
	});
	return response.data;
};

export const updateCustomer = async (
	customer: CustomerRequestObject,
	id: string
): Promise<Customer> => {
	const response = await axios.put<Customer>(`${customersUrl}/${id}`, customer);
	return response.data;
};

export const saveCustomer = async (
	customer: CustomerRequestObject,
	id?: string
): Promise<Customer> => {
	if (id) {
		return updateCustomer(customer, id);
	}
	return addCustomer(customer);
};

export const fetchCustomerById = async (id: string) => {
	const response = await axios.get<Customer>(`${customersUrl}/${id}`);
	return response.data;
};

export const searchCustomers = async (query: string) => {
	const response = await axios.get<Customer[]>(
		`${customersUrl}/search?query=${query}`
	);
	return response.data;
};

export const deleteCustomer = async (id: string) => {
	await axios.delete(`${customersUrl}/${id}`);
};
