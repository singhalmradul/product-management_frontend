import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/product/product.selector';
import { searchProductsStart } from '../../store/product/product.slice';
import {
	ProductSearchContainer,
	SearchInput,
	SearchResult,
	SearchResults,
} from './product-search.styles';
import { Link } from 'react-router-dom';

const ProductSearch = () => {
	const [query, setQuery] = useState('');
	const products = useSelector(selectProducts);
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
				<SearchResults className='search-results'>
					{products.map((product) => (
						<Link to={`/view/product/${product.id}`} key={product.id}>
							<SearchResult key={product.id} className='search-result'>
								{product.name} - {product.code} - {product.weightString}
							</SearchResult>
						</Link>
					))}
				</SearchResults>
			)}
			{products.length === 0 && query.trim().length > 3 && (
				<p>
					No products found for "{query}". <br /> Please try another
				</p>
			)}
		</ProductSearchContainer>
	);
};

export default ProductSearch;
