import Button from '../../components/button/button.component';
import Page from '../../components/page/page.component';

const Home = () => {
	return (
		<Page title='Home'>
			<Button linkTo='products'>products</Button>
			<Button linkTo='categories'>categories</Button>
			<Button linkTo='customers'>customers</Button>
			<Button onClick={() => window.alert('not implemented')}>orders</Button>
			<Button linkTo='/features/scan'>scan</Button>
		</Page>
	);
};

export default Home;
