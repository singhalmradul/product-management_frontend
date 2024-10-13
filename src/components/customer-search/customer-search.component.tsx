import Search from '../search/search.component';

import { Customer } from '../../store/customer/customer.types';

import {
	selectCustomers,
	selectCustomerIsLoading,
} from '../../store/customer/customer.selector';

import { CustomerName, SearchResult } from './customer-search.styles';
import {
	resetCustomers,
	searchCustomersStart,
} from '../../store/customer/customer.slice';

type SearchResultComponentProps = {
	customer: Customer;
	onResultClick?: (customer: Customer) => void;
};

const SearchResultComponent = ({
	customer,
	onResultClick,
}: SearchResultComponentProps) => (
	<SearchResult
		key={customer.id}
		onClick={onResultClick ? () => onResultClick(customer) : undefined}
	>
		<CustomerName to={onResultClick ? '#' : customer.id}>
			{customer.name}
		</CustomerName>
	</SearchResult>
);

const searchResultComponent =
	(onResultClick?: (customer: Customer) => void) => (customer: Customer) =>
		<SearchResultComponent customer={customer} onResultClick={onResultClick} />;

type CustomerSearchProps = {
	showEmptyMessage?: boolean;
	onResultClick?: (customer: Customer) => void;
};

const CustomerSearch = ({
	showEmptyMessage,
	onResultClick,
}: CustomerSearchProps) => {
	return (
		<Search<Customer>
			name='customers'
			resultsSelector={selectCustomers}
			isLoadingSelector={selectCustomerIsLoading}
			searchAction={searchCustomersStart}
			resetAction={resetCustomers}
			searchResultComponent={searchResultComponent(onResultClick)}
			showEmptyMessage={showEmptyMessage}
		/>
	);
};

export default CustomerSearch;
