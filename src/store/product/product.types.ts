import Category from '../category/category.types';
import { QuantityUnit } from '../types';

type Product = {
	id: string;
	code: string;
	dimensions: {
		length: number | null;
		width: number | null;
		height: number | null;
	};
	weight: number | null;
	weightString: string | null;
	name: string;
	unitPreference: QuantityUnit;
	images: string[];
	description: string | null;
	categories: Category[];
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
	unitPreference: QuantityUnit;
	newImages: File[];
	description: string | null;
	categories: ProductRequestCategoryObject[];
};

export type ProductRequestCategoryObject = {
	id: string;
};

export type ProductState = {
	readonly products: Product[];
	readonly isLoading: boolean;
	readonly error: Error | null;
	readonly product: Product | null;
};

export default Product;
