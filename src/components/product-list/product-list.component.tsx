import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/order/order.selector';
import ProductCard from '../product-card/product-card.component';

const ProductList = () => {
	const products = useSelector(selectProducts);
	return (
		<div>
			{products.map((orderProduct) => (
				<ProductCard
					key={orderProduct.product.id}
					orderProduct={orderProduct}
				/>
			))}
		</div>
	);
};

export default ProductList;
