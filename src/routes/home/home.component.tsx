import Button from '../../components/button/button.component';
import Page from '../../components/page/page.component';

const Home = () => {
	return (
		<Page title='Home'>
			<Button linkTo='/features/scan'>scan</Button>
			<Button linkTo='products'>products</Button>
			<Button linkTo='categories'>categories</Button>
		</Page>
	);
};

export default Home;
