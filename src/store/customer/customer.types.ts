export type Customer = {
	id: string;
	name: string;
	gstin: string;
	email: string;
	phoneNumber: string;
	description: string;
};

export type CustomerRequestObject = {
	name: string;
	gstin: string;
	email: string;
	phoneNumber: string;
	description: string;
};

export type CustomerState = {
	customer: Customer | null;
	customers: Customer[];
	isLoading: boolean;
	error: Error | null;
};

export const toCustomerRequestObject = (customer: Customer): CustomerRequestObject => {
	return customer;
}