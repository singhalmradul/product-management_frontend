import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
	deleteProductStart,
	fetchProductByIdStart,
} from '../../store/product/product.slice';

import {
	selectProduct,
	selectProductIsLoading,
} from '../../store/product/product.selector';

import Spinner from '../../components/spinner/spinner.component';
import Detail from '../../components/detail/detail.component';
import ImagePreview from '../../components/image-preview/image-preview.component';
import Button from '../../components/button/button.component';

const ProductDetails = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const product = useSelector(selectProduct);
	const isLoading = useSelector(selectProductIsLoading);

	const [isDelete, setIsDelete] = useState(false);

	useEffect(() => {
		if (id && product?.id !== id) {
			if (isDelete) {
				navigate('/');
			} else {
				dispatch(fetchProductByIdStart(id));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, product, isDelete]);

	const handleDelete = () => {
		if (window.confirm('Are you sure you want to delete this product?')) {
			dispatch(deleteProductStart(id!));
			setIsDelete(true);
		}
	};

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
			<Detail label='Unit Preference' value={product.unitPreference} />
			<Detail label='Description' value={product.description} />
			<ImagePreview images={product.images} />
			<Link to={`/edit/product/${product.id}`}>
				<Button>Edit</Button>
			</Link>
			<Button onClick={handleDelete}>Delete</Button>
		</div>
	);
};

export default ProductDetails;
