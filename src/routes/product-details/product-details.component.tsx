import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
	selectProduct,
	selectProductIsLoading,
} from '../../store/product/product.selector';
import { fetchProductStart } from '../../store/product/product.slice';
import Spinner from '../../components/spinner/spinner.component';
import { Detail } from '../../components/detail/detail.component';
import ImagePreview from '../../components/image-preview/image-preview.component';
import Button from '../../components/button/button.component';

const ProductDetails = () => {
	const { id } = useParams();
	const product = useSelector(selectProduct);
	const isLoading = useSelector(selectProductIsLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		if (id && product?.id !== id) {
			dispatch(fetchProductStart(id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, product]);

	if (isLoading || !product) {
		return <Spinner />;
	}

	return (
		<div>
			<h1>Product Details</h1>
			<Detail label='Code' value={product.code} />
			<Detail label='Name' value={product.name} />
			<Detail label='Weight' value={product.weightString} />
			<Detail label='Length' value={product.dimensions?.length} />
			<Detail label='Width' value={product.dimensions?.width} />
			<Detail label='Height' value={product.dimensions?.height} />
			<Detail
				label='Categories'
				value={
					product.categories.map((category) => category.name)?.join(', ') ??
					'No categories'
				}
			/>
			<Detail label='Description' value={product.description} />
			<ImagePreview images={product.images} />
			{/* <Link to={`/edit/product/${product.id}`}>
				<Button>Edit</Button>
			</Link> */}
			<Link to={`/delete/product/${product.id}`}>
				<Button>Delete</Button>
			</Link>
			<Link to='/'>
				<Button>Back</Button>
			</Link>
		</div>
	);
};

export default ProductDetails;
