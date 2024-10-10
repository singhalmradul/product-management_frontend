import { Navigate, Route, Routes } from 'react-router-dom';
import CustomersPage from '../customers-page/customers-page.component';
import SaveCustomer from '../save-customer/save-customer.component';
import CustomerDetails from '../customer-details/customer-details.component';

const Customers = () => {
	return (
		<Routes>
			<Route index element={<CustomersPage />} />
			<Route path='add' element={<SaveCustomer />} />
			<Route path=':id' element={<CustomerDetails />} />
			<Route path=':id/edit' element={<SaveCustomer />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default Customers;
