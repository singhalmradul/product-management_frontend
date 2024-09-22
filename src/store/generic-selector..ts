import {
	selectProduct,
	selectProductIsLoading,
} from './product/product.selector';
import { RootState } from './store';

type Entity = {
    id: string;
    [key: string]: any;
};

type Selector = (state: RootState) => Entity | null;

type IsLoadingSelector = (state: RootState) => boolean;

const selectorMap = new Map<string, Selector>();
selectorMap.set('product', selectProduct);

const isLoadingSelectorMap = new Map<string, IsLoadingSelector>();
isLoadingSelectorMap.set('product', selectProductIsLoading);

export const selector = (text: string) =>
	selectorMap.get(text) as Selector;

export const isLoadingSelector = (text: string) =>
	isLoadingSelectorMap.get(text) as IsLoadingSelector;
