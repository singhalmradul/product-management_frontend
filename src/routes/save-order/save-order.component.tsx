import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Customer } from '../../store/customer/customer.types';
import { Product } from '../../store/product/product.types';
import {
	OrderProduct,
	OrderRequestObject,
} from '../../store/order/order.types';

import { resetCustomers } from '../../store/customer/customer.slice';

import { selectOrder } from '../../store/order/order.selector';

import ProductList from '../../components/product-list/product-list.component';
import QrScanner from '../../components/qr-scanner/qr-scanner.component';
import TextInput from '../../components/text-input/text-input.component';
import WithLabel from '../../components/with-label/with-label.component';
import Page from '../../components/page/page.component';
import Form from '../../components/form/form.component';
import CustomerSearch from '../../components/customer-search/customer-search.component';
import ProductSearch from '../../components/product-search/product-search.component';

import { DateInput } from './save-order.styles';
import { fetchProductByCodeStart } from '../../store/product/product.slice';
import { selectProduct } from '../../store/product/product.selector';
import { saveOrderStart } from '../../store/order/order.slice';
import { QuantityUnit } from '../../store/types';

const SaveOrder = () => {

	const INITIAL_ORDER_STATE: OrderRequestObject = {
		customer: null,
		date: new Date().toISOString().split('T')[0],
		products: [],
	};
	const dispatch = useDispatch();

	const product = useSelector(selectProduct);

	const [productCode, setProductCode] = useState<string | null>(null);

	const [order, setOrder] = useState<OrderRequestObject>(INITIAL_ORDER_STATE);

	const { customer } = order;

	useEffect(() => {
		dispatch(resetCustomers());
	}, [customer]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (productCode) {
			dispatch(fetchProductByCodeStart(productCode));
		}
	}, [productCode]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (product?.code === productCode) {
			handleProductChange(product);
			setProductCode(null);
		}
	}, [product]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleChange = (orderProduct: OrderProduct) => {
		if (!orderProduct) {
			return;
		}

		const {
			product,
			quantity: { amount },
		} = orderProduct;
		const products = order.products;
		let newProducts;

		if (amount === -1) {
			newProducts = products.filter(({ product: { id } }) => id !== product.id);
			console.log('remove', newProducts);
		} else if (products.some(({ product: { id } }) => id === product.id)) {
			newProducts = products.map((item) => {
				if (orderProduct.product.id === item.product.id) {
					return orderProduct;
				}
				return item;
			});
			console.log('update', newProducts);
		} else {
			newProducts = [...products, orderProduct];
			console.log('add', newProducts);
		}

		setOrder({ ...order, products: newProducts });
	};

	const handleScan = (decodedText: string) => {
		setProductCode(decodedText);
	};

	const handleCustomerChange = (customer: Customer) => {
		setOrder({ ...order, customer });
	};

	const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		const date = new Date(event.target.value).toISOString().split('T')[0];
		setOrder({ ...order, date });
	};

	const handleProductChange = (product: Product) => {
		handleChange({
			product,
			quantity: {
				amount: 1,
				unit: product.unitPreference ?? QuantityUnit.PCS,
			},
		});
	};

	const handleSubmit = () => {
		dispatch(saveOrderStart({ order }));
	};

	return (
		<Page title='Save Order'>
			<Form onSubmit={handleSubmit} buttonText='save'>
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
				<ProductList products={order.products} handleChange={handleChange} />
			</Form>
		</Page>
	);
};

export default SaveOrder;
