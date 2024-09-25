import { QuantityUnit } from '../types';

type Category = {
	id: string;
	name: string;
	unitPreference: QuantityUnit;
	images: string[];
	description: string;
};

export type CategoryRequestObject = {
    name: string;
    unitPreference: QuantityUnit;
    images: File[];
    description: string;
};

export type CategoryState = {
	readonly categories: Category[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export default Category;
