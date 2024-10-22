import { OrderProduct } from '../../store/order/order.types';
import ProductCard from '../product-card/product-card.component';
import { ProductListContainer } from './product-list.styles';

type ProductListProps = {
	products: OrderProduct[];
	handleChange: (orderProduct: OrderProduct) => void;
};

const ProductList = ({ products, handleChange }: ProductListProps) => {
	return (
		<ProductListContainer>
			{products.map((orderProduct) => (
				<ProductCard
					key={orderProduct.product.id}
					orderProduct={orderProduct}
					handleChange={handleChange}
				/>
			))}
		</ProductListContainer>
	);
};

export default ProductList;
