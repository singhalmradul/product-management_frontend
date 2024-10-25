import { Customer } from '../customer/customer.types';
import { Product } from '../product/product.types';
import { QuantityUnit } from '../types';

export type OrderProduct = {
	product: Product;
	quantity: {
		amount: number | null;
		unit: QuantityUnit;
	};
};

export type Order = {
	readonly id: string;
	readonly customer: Customer | null;
	readonly date: string;
	readonly pdf: string | null;
	readonly products: OrderProduct[];
};

export type OrderRequestObject = {
	readonly customer: Customer | null;
	readonly date: string;
	readonly products: OrderProduct[];
};

export type OrderState = {
	readonly orders: Order[];
	readonly order: Order | null;
	readonly orderProduct: OrderProduct | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};
