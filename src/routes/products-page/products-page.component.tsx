import Button from '../../components/button/button.component';
import Page from '../../components/page/page.component';
import ProductSearch from '../../components/product-search/product-search.component';

const ProductsPage = () => {
	return (
		<Page title='Products'>
			<Button linkTo='add'>add</Button>
			<ProductSearch />
		</Page>
	);
};

export default ProductsPage;
