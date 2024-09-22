import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import Product from '../../store/product/product.types';

const ProductSearch = () => {
	const [query, setQuery] = useState('');
	const [products, setProducts] = useState<Product[]>([]);

	const fetchProducts = async (searchTerm: string) => {
		if (!searchTerm.trim()) return;

		try {
			const response = await fetch(
				`http://localhost:8080/api/v1/products/search?query=${searchTerm}`
			);
			const data = await response.json();
			setProducts(data);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};
	const debouncedSearch = useCallback(debounce(fetchProducts, 1000), []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		debouncedSearch(query);

		return () => {
			debouncedSearch.cancel();
		};
	}, [query]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<input
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Search products...'
			/>

			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name} - {product.code} - {product.weightString}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductSearch;
