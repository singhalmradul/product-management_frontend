import Button from '../../components/button/button.component';
import { HomeContainer, HomeTitle } from './home.styles';

const Home = () => {
	return (
		<HomeContainer>
			<HomeTitle>Home</HomeTitle>
			<Button linkTo='/add/product'>add product</Button>
			<Button linkTo='/add/category'>add category</Button>
			<Button linkTo='/view/products'>view products</Button>
			<Button linkTo='/view/categories'>view categories</Button>
			<Button linkTo='/features/scan'>scan</Button>
		</HomeContainer>
	);
};

export default Home;
