import Button from '../../components/button/button.component';
import CategorySearch from '../../components/category-search/category-search.component';
import Page from '../../components/page/page.component';

const CategoriesPage = () => {
	return (
		<Page title='Categories'>
			<Button linkTo='add'>add</Button>
			<CategorySearch />
		</Page>
	);
};

export default CategoriesPage;
