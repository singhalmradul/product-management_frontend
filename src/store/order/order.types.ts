import { Product } from '../product/product.types';
import { QuantityUnit } from '../types';

export type OrderProduct = {
	product: Product;
	quantity: {
		amount: number | null;
		unit: QuantityUnit;
	};
};

export type OrderState = {
	readonly customer: string;
	readonly date: string;
	readonly products: OrderProduct[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};
