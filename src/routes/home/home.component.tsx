import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';
import { HomeContainer, HomeTitle } from './home.styles';

const Home = () => {
	return (
		<HomeContainer>
			<HomeTitle>Home</HomeTitle>
			<Link to='/add/product'>
				<Button>add product</Button>
			</Link>
			<Link to='/add/category'>
				<Button>add category</Button>
			</Link>
			<Link to='/view/products'>
				<Button>view products</Button>
			</Link>
			<Link to='/features/scan'>
				<Button>scan</Button>
			</Link>
		</HomeContainer>
	);
};

export default Home;
