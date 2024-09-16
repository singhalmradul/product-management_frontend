const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<button onClick={() => (window.location.href = '/add/product')}>
				Upload Product
			</button>
			<button onClick={() => (window.location.href = '/add/category')}>
				Upload Category
			</button>
		</div>
	);
};

export default Home;
