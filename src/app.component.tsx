import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import SaveProduct from './routes/save-product/save-product.component';
import AddCategory from './routes/add-category/add-category.component';
import ProductDetails from './routes/product-details/product-details.component';
import ProductSearch from './routes/product-search/product-search.component';
import QrOrderGenerator from './routes/qr-order-generator/qr-order-generator.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/add/product' element={<SaveProduct />} />
			<Route path='/add/category' element={<AddCategory />} />
			<Route path='/view/product/:id' element={<ProductDetails />} />
			<Route path='/view/products' element={<ProductSearch />} />
			<Route path='/edit/product/:id' element={<SaveProduct />} />
			<Route path='/features/scan' element={<QrOrderGenerator />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default App;
