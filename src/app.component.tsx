import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import SaveCategory from './routes/save-category/save-category.component';
import QrOrderGenerator from './routes/qr-order-generator/qr-order-generator.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import CategoryDetails from './routes/category-details/category-details.component';
import CategorySearch from './routes/category-search/category-search.component';
import Products from './routes/products/products.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path='add/category' element={<SaveCategory />} />
				<Route path='view/category/:id' element={<CategoryDetails />} />
				<Route path='view/categories' element={<CategorySearch />} />
				<Route path='edit/category/:id' element={<SaveCategory />} />
				<Route path='features/scan' element={<QrOrderGenerator />} />
				<Route path='products/*' element={<Products />} />

				<Route path='*' element={<Navigate to='/' replace />} />
			</Route>
		</Routes>
	);
};

export default App;
