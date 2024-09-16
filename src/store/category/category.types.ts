type Category = {
	id: string;
	name: string;
	unitPreference: string;
	images: string[];
	description: string;
};

export type CategoryRequestObject = {
    name: string;
    unitPreference: string;
    images: File[];
    description: string;
};

export type CategoryState = {
	categories: Category[];
	isLoading: boolean;
	error: Error | null;
};

export default Category;
