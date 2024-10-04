import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectProductIsLoading,
	selectProducts,
} from '../../store/product/product.selector';
import { searchProductsStart } from '../../store/product/product.slice';
import {
	NotFoundMessage,
	ProductSearchContainer,
	Query,
	SearchInput,
	SearchResult,
	SearchResults,
} from './product-search.styles';
import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';

const ProductSearch = () => {
	const [query, setQuery] = useState('');
	const products = useSelector(selectProducts);
	const productIsLoading = useSelector(selectProductIsLoading);
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		if (value.trim()) {
			dispatch(searchProductsStart(value));
		}
	};

	return (
		<ProductSearchContainer>
			<SearchInput
				type='text'
				value={query}
				onChange={handleChange}
				placeholder='Search products...'
				className='search-input'
			/>
			{products.length > 0 && (
				<SearchResults>
					{products.map(({ id, name, code, weightString }) => (
						<Link to={`/view/product/${id}`} key={id}>
							<SearchResult key={id} className='search-result'>
								{name} - {code} - {weightString}
							</SearchResult>
						</Link>
					))}
				</SearchResults>
			)}
			{productIsLoading ? (
				<Spinner />
			) : (
				products.length === 0 &&
				query.trim().length > 0 && (
					<NotFoundMessage>
						We couldn't find any products matching <Query>{query}</Query>.{' '}
						<br /> Try refining your search or using different keywords.
					</NotFoundMessage>
				)
			)}
		</ProductSearchContainer>
	);
};

export default ProductSearch;
