import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to='/add/product'>add product</Link>
			<br />
			<Link to='/add/category'>add category</Link>
		</div>
	);
};

export default Home;
