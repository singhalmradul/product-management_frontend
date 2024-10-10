import Button from '../../components/button/button.component';
import CustomerSearch from '../../components/customer-search/customer-search.component';
import Page from '../../components/page/page.component';

const CustomersPage = () => {
	return (
		<Page title='Customers'>
			<Button linkTo='add'>add</Button>
			<CustomerSearch />
		</Page>
	);
};

export default CustomersPage;
