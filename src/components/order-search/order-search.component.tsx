import { Order } from '../../store/order/order.types';

import {
	selectOrders,
	selectOrderIsLoading,
} from '../../store/order/order.selector';

import { SearchResult, SearchResults } from './order-search.styles';
import {
	fetchAllOrdersStart,
	resetOrders,
	searchOrdersStart,
} from '../../store/order/order.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/spinner.component';

type OrderSearchProps = {
	showEmptyMessage?: boolean;
	onResultClick?: (order: Order) => void;
};

const OrderSearch = ({ showEmptyMessage, onResultClick }: OrderSearchProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchAllOrdersStart());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleOrderListItemClick = (id: string) => () =>
		navigate(`/orders/${id}`);
	const orders = useSelector(selectOrders);
	const orderIsLoading = useSelector(selectOrderIsLoading);

	if (orderIsLoading) {
		return <Spinner />;
	}

	return (
		<SearchResults>
			{orders.map((order) => (
				<SearchResult
					key={order.id}
					onClick={handleOrderListItemClick(order.id)}
				>{`${order.date} - ${order.customer?.name}`}</SearchResult>
			))}
		</SearchResults>
	);
};

export default OrderSearch;
