import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/order/order.selector';
import ProductCard from '../product-card/product-card.component';
import { ProductListContainer } from './product-list.styles';

const ProductList = () => {
	const products = useSelector(selectProducts);
	return (
		<ProductListContainer>
			{products.map((orderProduct) => (
				<ProductCard
					key={orderProduct.product.id}
					orderProduct={orderProduct}
				/>
			))}
		</ProductListContainer>
	);
};

export default ProductList;
