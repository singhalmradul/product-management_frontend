import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Customer } from '../../store/customer/customer.types';
import { Product } from '../../store/product/product.types';

import {
	addProductByIdStart,
	setDate,
	setCustomer,
	addProduct,
} from '../../store/order/order.slice';

import ProductList from '../../components/product-list/product-list.component';
import QrScanner from '../../components/qr-scanner/qr-scanner.component';
import TextInput from '../../components/text-input/text-input.component';
import WithLabel from '../../components/with-label/with-label.component';
import Page from '../../components/page/page.component';
import Form from '../../components/form/form.component';
import CustomerSearch from '../../components/customer-search/customer-search.component';
import ProductSearch from '../../components/product-search/product-search.component';

import { DateInput } from './save-order.styles';
import { selectCustomer } from '../../store/order/order.selector';
import { resetCustomers } from '../../store/customer/customer.slice';

const SaveOrder = () => {
	const dispatch = useDispatch();

	const customer = useSelector(selectCustomer);

	useEffect(() => {
			dispatch(resetCustomers());
	}, [customer]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleScan = (decodedText: string) => {
		dispatch(addProductByIdStart(decodedText));
	};

	const handleCustomerChange = (customer: Customer) => {
		dispatch(setCustomer(customer));
	};

	const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setDate(event.target.value));
	};

	const handleProductChange = (product: Product) => {
		dispatch(addProduct(product));
	};

	return (
		<Page title='Save Order'>
			<Form onSubmit={() => {}} title={''} buttonText={''}>
				<CustomerSearch
					showEmptyMessage={false}
					onResultClick={handleCustomerChange}
				/>
				<TextInput
					placeholder='Customer Name'
					label='Customer Name'
					disabled={true}
					value={customer?.name}
				/>
				<WithLabel
					label='Date'
					element={
						<DateInput
							type='date'
							defaultValue={new Date().toISOString().split('T')[0]}
							onChange={handleDateChange}
						/>
					}
				/>
				<ProductSearch
					showEmptyMessage={false}
					onResultClick={handleProductChange}
				/>
				<QrScanner onScan={handleScan} />
				<ProductList />
			</Form>
		</Page>
	);
};

export default SaveOrder;
