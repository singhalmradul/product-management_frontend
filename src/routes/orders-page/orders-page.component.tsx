import Button from '../../components/button/button.component';
import OrderSearch from '../../components/order-search/order-search.component';
import Page from '../../components/page/page.component';

const OrdersPage = () => {
	return (
		<Page title='Orders'>
			<Button linkTo='add'>add</Button>
			<OrderSearch />
		</Page>
	);
};

export default OrdersPage;
