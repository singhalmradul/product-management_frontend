import { Product } from '../../store/product/product.types';

import {
	resetProducts,
	searchProductsStart,
} from '../../store/product/product.slice';

import {
	selectProductIsLoading,
	selectProducts,
} from '../../store/product/product.selector';

import Search from '../search/search.component';

import { ProductName, SearchResult } from './product-search.styles';

type SearchResultComponentProps = {
	product: Product;
	onResultClick?: (product: Product) => void;
};

const SearchResultComponent = ({
	product,
	onResultClick,
}: SearchResultComponentProps) => (
	<SearchResult
		key={product.id}
		onClick={onResultClick ? () => onResultClick(product) : undefined}
	>
		<ProductName to={onResultClick ? '#' : product.id}>
			{product.name} - {product.code} - {product.weightString}
		</ProductName>
	</SearchResult>
);

const searchResultComponent =
	(onResultClick?: (product: Product) => void) => (product: Product) =>
		<SearchResultComponent product={product} onResultClick={onResultClick} />;

type ProductSearchProps = {
	showEmptyMessage?: boolean;
	onResultClick?: (product: Product) => void;
};

const ProductSearch = ({
	showEmptyMessage,
	onResultClick,
}: ProductSearchProps) => {
	return (
		<Search<Product>
			name='products'
			resultsSelector={selectProducts}
			isLoadingSelector={selectProductIsLoading}
			searchAction={searchProductsStart}
			resetAction={resetProducts}
			searchResultComponent={searchResultComponent(onResultClick)}
			showEmptyMessage={showEmptyMessage}
		/>
	);
};

export default ProductSearch;
