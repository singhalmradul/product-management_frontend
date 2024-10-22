import { Navigate, Route, Routes } from 'react-router-dom';
import OrdersPage from '../orders-page/orders-page.component';
import SaveOrder from '../save-order/save-order.component';
import OrderDetails from '../order-details/order-details.component';

const Orders = () => {
	return (
		<Routes>
			<Route index element={<OrdersPage />} />
			<Route path='add' element={<SaveOrder />} />
			<Route path=':id' element={<OrderDetails />} />
			<Route path=':id/edit' element={<SaveOrder />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default Orders;
