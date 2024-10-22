import Button from '../../components/button/button.component';
import Page from '../../components/page/page.component';

const Home = () => {
	return (
		<Page title='Home'>
			<Button linkTo='products'>products</Button>
			<Button linkTo='categories'>categories</Button>
			<Button linkTo='customers'>customers</Button>
			<Button linkTo='orders'>orders</Button>
		</Page>
	);
};

export default Home;
