import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import {
	addProductStart,
	setDate,
	setCustomer,
} from '../../store/order/order.slice';

import ProductList from '../../components/product-list/product-list.component';
import QrScanner from '../../components/qr-scanner/qr-scanner.component';
import TextInput from '../../components/text-input/text-input.component';
import WithLabel from '../../components/with-label/with-label.component';
import Page from '../../components/page/page.component';
import Form from '../../components/form/form.component';
import { DateInput } from './save-order.styles';
import CustomerSearch from '../../components/customer-search/customer-search.component';
import ProductSearch from '../../components/product-search/product-search.component';
import { Customer } from '../../store/customer/customer.types';

const QrOrderGenerator = () => {
	const dispatch = useDispatch();

	const handleScan = (decodedText: string) => {
		dispatch(addProductStart(decodedText));
	};

	const handleCustomerChange = (customer: Customer) => {
		dispatch(setCustomer(customer.name));
	};

	const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setDate(event.target.value));
	};

	return (
		<Page title='Qr Order Generator'>
			<Form onSubmit={() => {}} title={''} buttonText={''}>
				<CustomerSearch
					showEmptyMessage={false}
					onResultClick={handleCustomerChange}
				/>
				<TextInput
					placeholder='Customer Name'
					label='Customer Name'
					disabled={true}
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
				<ProductSearch showEmptyMessage={false} />
				<QrScanner onScan={handleScan} />
				<ProductList />
			</Form>
		</Page>
	);
};

export default QrOrderGenerator;
