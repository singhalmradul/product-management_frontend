import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Products from './routes/products/products.component';
import Categories from './routes/categories/categories.component';
import Customers from './routes/customers/customers.component';
import Orders from './routes/orders/orders.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path='products/*' element={<Products />} />
				<Route path='categories/*' element={<Categories />} />
				<Route path='customers/*' element={<Customers />} />
				<Route path='orders/*' element={<Orders />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Route>
		</Routes>
	);
};

export default App;
