type Product = {
	id: string;
	code: string;
	dimensions: {
		length: number;
		width: number;
		height: number;
	};
	weight: number;
	name: string;
	unitPreference: string;
	images: string[];
	description: string;
	category: string;
};

export type ProductRequestObject = {
	code: string;
	dimensions: {
		length: number;
		width: number;
		height: number;
	};
	weight: number;
	name: string;
	unitPreference: string;
	images: File[];
	description: string;
	category: string;
};

export type ProductState = {
	products: Product[];
	isLoading: boolean;
	error: Error | null;
};

export default Product;
