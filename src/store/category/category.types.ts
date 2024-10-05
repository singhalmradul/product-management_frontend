import { ObjectWithId, QuantityUnit } from '../types';

type Category = ObjectWithId & {
	name: string;
	unitPreference: QuantityUnit;
	images: string[];
	description: string;
};

export type CategoryRequestObject = {
	name: string;
	unitPreference: QuantityUnit;
	images: string[];
	newImages: File[];
	description: string;
};

export const toCategoryRequestObject = (
	category: Category
): CategoryRequestObject => ({
	newImages: [],
	...category,
});

export type CategoryState = {
	readonly categories: Category[];
	readonly category: Category | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export default Category;
