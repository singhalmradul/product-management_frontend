import Search from '../search/search.component';

import { Customer } from '../../store/customer/customer.types';

import {
	selectCustomers,
	selectCustomerIsLoading,
} from '../../store/customer/customer.selector';

import { CustomerName, SearchResult } from './customer-search.styles';
import { searchCustomersStart } from '../../store/customer/customer.slice';

const SearchResultComponent = ({ id, name }: Customer) => (
	<SearchResult key={id} >
		<CustomerName to={id}> {name}
		</CustomerName>
	</SearchResult>
);

const CustomerSearch = () => {
	return (
		<Search<Customer>
			name='customers'
			resultsSelector={selectCustomers}
			isLoadingSelector={selectCustomerIsLoading}
			searchAction={searchCustomersStart}
			searchResultComponent={SearchResultComponent}
		/>
	);
};

export default CustomerSearch;
