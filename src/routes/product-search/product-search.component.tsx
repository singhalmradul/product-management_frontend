import Product from '../../store/product/product.types';

import { searchProductsStart } from '../../store/product/product.slice';

import {
	selectProductIsLoading,
	selectProducts,
} from '../../store/product/product.selector';

import Search from '../../components/search/search.component';

import { SearchResult } from './product-search.styles';

const SearchResultComponent = ({ id, name, code, weightString }: Product) => (
	<SearchResult key={id} to={`/view/product/${id}`}>
		{name} - {code} - {weightString}
	</SearchResult>
);

const ProductSearch = () => {
	return (
		<Search<Product>
			name='products'
			resultsSelector={selectProducts}
			isLoadingSelector={selectProductIsLoading}
			searchAction={searchProductsStart}
			searchResultComponent={SearchResultComponent}
		/>
	);
};

export default ProductSearch;
