import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { addProductStart, setDate, setMerchant } from '../../store/order/order.slice';

import Button from '../../components/button/button.component';
import ProductList from '../../components/product-list/product-list.component';
import QrScanner from '../../components/qr-scanner/qr-scanner.component';
import TextInput from '../../components/text-input/text-input.component';
import WithLabel from '../../components/with-label/with-label.component';

const QrOrderGenerator = () => {
	const dispatch = useDispatch();

	const handleScan = (decodedText: string) => {
		dispatch(addProductStart(decodedText));
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setMerchant(event.target.value));
	};

	const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setDate(event.target.value));
	};

	return (
		<div className='qr-order-generator-container'>
			<h1 className='heading'>Qr Order Generator</h1>
			<TextInput placeholder='Merchant Name' label='Merchant Name' onChange={handleChange}/>
			<WithLabel
				label='Date'
				element={
					<input
						type='date'
						defaultValue={new Date().toISOString().split('T')[0]}
						onChange={handleDateChange}
					/>
				}
			/>
			<QrScanner onScan={handleScan} />
			<ProductList />
			<Button>Confirm</Button>
		</div>
	);
};

export default QrOrderGenerator;
