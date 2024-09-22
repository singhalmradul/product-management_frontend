import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import AddProduct from './routes/add-product/add-product.component';
import AddCategory from './routes/add-category/add-category.component';
import ProductDetails from './routes/product-details/product-details.component';
import ProductSearch from './routes/product-search/product-search.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/add/product' element={<AddProduct />} />
			<Route path='/add/category' element={<AddCategory />} />
			<Route path='/view/product/:id' element={<ProductDetails />} />
			<Route path='/view/products' element={<ProductSearch />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default App;
