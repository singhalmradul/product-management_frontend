import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
	deleteProductStart as deleteCategoryStart,
} from '../../store/product/product.slice';

import Spinner from '../../components/spinner/spinner.component';
import Detail from '../../components/detail/detail.component';
import ImagePreview from '../../components/image-preview/image-preview.component';
import Button from '../../components/button/button.component';
import { selectCategory, selectCategoryIsLoading } from '../../store/category/category.selector';
import { fetchCategoryByIdStart } from '../../store/category/category.slice';

const CategoryDetails = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const category = useSelector(selectCategory);
	const isLoading = useSelector(selectCategoryIsLoading);

	const [isDelete, setIsDelete] = useState(false);

	useEffect(() => {
		if (id && category?.id !== id) {
			if (isDelete) {
				navigate('/');
			} else {
				dispatch(fetchCategoryByIdStart(id));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, category, isDelete]);

	const handleDelete = () => {
		if (window.confirm('Are you sure you want to delete this product?')) {
			dispatch(deleteCategoryStart(id!));
			setIsDelete(true);
		}
	};

	if (isLoading || !category) {
		return <Spinner />;
	}

	return (
		<div>
			<h1>Product Details</h1>
			<Detail label='Name' value={category.name} />
			<Detail label='Unit Preference' value={category.unitPreference} />
			<Detail label='Description' value={category.description} />
			<ImagePreview images={category.images} />
			<Link to={`/edit/category/${category.id}`}>
				<Button>Edit</Button>
			</Link>
			<Button onClick={handleDelete}>Delete</Button>
		</div>
	);
};

export default CategoryDetails;
