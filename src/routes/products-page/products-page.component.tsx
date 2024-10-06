import Button from '../../components/button/button.component';
import Page from '../../components/page/page.component';
import ProductSearch from '../product-search/product-search.component';

const ProductsPage = () => {
	return (
		<Page title='Products'>
			<Button linkTo='add'>add</Button>
			<ProductSearch />
		</Page>
	);
};

export default ProductsPage;
