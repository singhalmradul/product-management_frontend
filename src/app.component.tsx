import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import SaveProduct from './routes/save-product/save-product.component';
import SaveCategory from './routes/save-category/save-category.component';
import ProductDetails from './routes/product-details/product-details.component';
import ProductSearch from './routes/product-search/product-search.component';
import QrOrderGenerator from './routes/qr-order-generator/qr-order-generator.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import CategoryDetails from './routes/category-details/category-details.component';
import CategorySearch from './routes/category-search/category-search.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path='add/product' element={<SaveProduct />} />
				<Route path='add/category' element={<SaveCategory />} />
				<Route path='view/product/:id' element={<ProductDetails />} />
				<Route path='view/category/:id' element={<CategoryDetails />} />
				<Route path='view/products' element={<ProductSearch />} />
				<Route path='view/categories' element={<CategorySearch />} />
				<Route path='edit/product/:id' element={<SaveProduct />} />
				<Route path='edit/category/:id' element={<SaveCategory />} />
				<Route path='features/scan' element={<QrOrderGenerator />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Route>
		</Routes>
	);
};

export default App;
