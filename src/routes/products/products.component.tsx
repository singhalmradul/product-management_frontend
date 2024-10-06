import { Navigate, Route, Routes } from 'react-router-dom';
import ProductsPage from '../products-page/products-page.component';
import SaveProduct from '../save-product/save-product.component';
import ProductDetails from '../product-details/product-details.component';

const Products = () => {
	return (
		<Routes>
			<Route index element={<ProductsPage />} />
			<Route path='add' element={<SaveProduct />} />
			<Route path=':id' element={<ProductDetails />} />
			<Route path=':id/edit' element={<SaveProduct />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default Products;
