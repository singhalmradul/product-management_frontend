import Product from '../product/product.types';

export type OrderProduct = {
	product: Product;
	quantity: {
		amount: number;
		unit: string;
	};
};

export type OrderState = {
	readonly products: OrderProduct[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};
