import Button from '../../components/button/button.component';
import Page from '../../components/page/page.component';

const Home = () => {
	return (
		<Page title='Home'>
			<Button linkTo='/add/category'>add category</Button>
			<Button linkTo='/view/categories'>view categories</Button>
			<Button linkTo='/features/scan'>scan</Button>
			<Button linkTo='products'>products</Button>
		</Page>
	);
};

export default Home;
