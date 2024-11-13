import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';
import Detail from '../../components/detail/detail.component';
import Button from '../../components/button/button.component';
import {
	selectOrder,
	selectOrderIsLoading,
} from '../../store/order/order.selector';
import {
	// deleteOrderStart,
	fetchOrderByIdStart,
} from '../../store/order/order.slice';
import Page from '../../components/page/page.component';
import { Heading } from '../../components/radio-choice/radio-choice.styles';

const OrderDetails = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const order = useSelector(selectOrder);
	const isLoading = useSelector(selectOrderIsLoading);

	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		if (id && order?.id !== id) {
			if (deleting) {
				navigate('/');
			} else {
				dispatch(fetchOrderByIdStart(id));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, order, deleting]);

	const handleDelete = () => {
		if (window.confirm('Are you sure you want to delete this order?')) {
			// dispatch(deleteOrderStart(id!));
			setDeleting(true);
		}
	};

	if (isLoading || !order) {
		return <Spinner />;
	}

	return (
		<Page title='Order Details'>
			<Detail label='Name' value={order.customer?.name} />
			<Detail label='PhoneNumber' value={order.customer?.phoneNumber} />
			<Heading>Products</Heading>
			{order.products.map((product) => (
				<Detail
					label={`${product.product.name} (${product.product.code})`}
					value={`${product.quantity.amount} ${product.quantity.unit}`}
					key={product.product.id}
				/>
			))}
			{/* <Button linkTo='edit'>Edit</Button>
			<Button onClick={handleDelete}>Delete</Button> */}
		</Page>
	);
};

export default OrderDetails;
