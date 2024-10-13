import { Product } from '../../store/product/product.types';

import { resetProducts, searchProductsStart } from '../../store/product/product.slice';

import {
	selectProductIsLoading,
	selectProducts,
} from '../../store/product/product.selector';

import Search from '../search/search.component';

import { SearchResult } from './product-search.styles';

const SearchResultComponent = ({ id, name, code, weightString }: Product) => (
	<SearchResult key={id} to={id}>
		{name} - {code} - {weightString}
	</SearchResult>
);


type ProductSearchProps = { showEmptyMessage?: boolean };

const ProductSearch = ({ showEmptyMessage }: ProductSearchProps) => {

	return (
		<Search<Product>
			name='products'
			resultsSelector={selectProducts}
			isLoadingSelector={selectProductIsLoading}
			searchAction={searchProductsStart}
			resetAction={resetProducts}
			searchResultComponent={SearchResultComponent}
			showEmptyMessage={showEmptyMessage}
		/>
	);
};

export default ProductSearch;
