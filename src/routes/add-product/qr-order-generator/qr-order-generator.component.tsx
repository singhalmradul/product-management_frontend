import { useDispatch } from 'react-redux';
import Button from '../../../components/button/button.component';
import ProductList from '../../../components/product-list/product-list.component';
import QrScanner from '../../../components/qr-scanner/qr-scanner.component';
import { addProductStart } from '../../../store/order/order.slice';

const QrOrderGenerator = () => {

	const dispatch = useDispatch();

	const handleScan = (decodedText: string) => {
		dispatch(addProductStart(decodedText));
	}

	return (
		<div>
			<h1>Qr Order Generator</h1>
			<QrScanner onScan={handleScan} />
			<ProductList />
			<Button>
				Confirm
			</Button>
		</div>
	);
};

export default QrOrderGenerator;
