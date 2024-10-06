import Button from '../../components/button/button.component';
import Page from '../../components/page/page.component';
import CategorySearch from '../category-search/category-search.component';
import ProductSearch from '../product-search/product-search.component';

const CategoriesPage = () => {
	return (
		<Page title='Categories'>
			<Button linkTo='add'>add</Button>
			<CategorySearch />
		</Page>
	);
};

export default CategoriesPage;
