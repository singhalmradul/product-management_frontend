import Category from '../category/category.types';
import { ObjectWithId, QuantityUnit } from '../types';

type Product = ObjectWithId & {
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
	unitPreference: QuantityUnit | null;
	images: string[];
	newImages: File[];
	description: string | null;
	categories: ObjectWithId[];
};

export type ProductState = {
	readonly products: Product[];
	readonly isLoading: boolean;
	readonly error: Error | null;
	readonly product: Product | null;
};

export const toProductRequestObject = (
	product: Product
): ProductRequestObject => {
	const categories = product.categories.map(
		(category) => category as ObjectWithId
	);
	return { ...product, categories, newImages: [] };
};

export default Product;
