import Search from '../search/search.component';

import { Order } from '../../store/order/order.types';

import {
	selectOrders,
	selectOrderIsLoading,
} from '../../store/order/order.selector';

import { CustomerName, SearchResult } from './order-search.styles';
import {
	resetOrders,
	searchOrdersStart,
} from '../../store/order/order.slice';

type SearchResultComponentProps = {
	order: Order;
	onResultClick?: (order: Order) => void;
};

const SearchResultComponent = ({
	order,
	onResultClick,
}: SearchResultComponentProps) => (
	<SearchResult
		key={order.id}
		onClick={onResultClick ? () => onResultClick(order) : undefined}
	>
		<CustomerName to={onResultClick ? '#' : order.id}>
			{order.customer?.name}
		</CustomerName>
	</SearchResult>
);

const searchResultComponent =
	(onResultClick?: (order: Order) => void) => (order: Order) =>
		<SearchResultComponent order={order} onResultClick={onResultClick} />;

type OrderSearchProps = {
	showEmptyMessage?: boolean;
	onResultClick?: (order: Order) => void;
};

const OrderSearch = ({
	showEmptyMessage,
	onResultClick,
}: OrderSearchProps) => {
	return (
		<Search<Order>
			name='orders'
			resultsSelector={selectOrders}
			isLoadingSelector={selectOrderIsLoading}
			searchAction={searchOrdersStart}
			resetAction={resetOrders}
			searchResultComponent={searchResultComponent(onResultClick)}
			showEmptyMessage={showEmptyMessage}
		/>
	);
};

export default OrderSearch;
