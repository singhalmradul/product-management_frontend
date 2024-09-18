type Product = {
	id: string;
	code: string;
	dimensions: {
		length: number | null;
		width: number | null;
		height: number | null;
	};
	weight: number | null;
	name: string;
	unitPreference: string;
	images: string[];
	description: string | null;
	categories: string[];
};

export type ProductRequestObject = {
	code: string;
	dimensions: {
		length: number | null;
		width: number | null;
		height: number | null;
	};
	weight: number | null;
	name: string;
	unitPreference: string;
	images: File[];
	description: string | null;
	categories: string[];
};

export type ProductState = {
	products: Product[];
	isLoading: boolean;
	error: Error | null;
	product: Product | null;
};

export default Product;
