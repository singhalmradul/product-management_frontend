import { Navigate, Route, Routes } from 'react-router-dom';
import ProductsPage from '../products-page/products-page.component';
import SaveProduct from '../save-product/save-product.component';
import ProductDetails from '../product-details/product-details.component';
import CategoriesPage from '../categories-page/categories-page.component';
import SaveCategory from '../save-category/save-category.component';
import CategoryDetails from '../category-details/category-details.component';

const Categories = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPage />} />
			<Route path='add' element={<SaveCategory />} />
			<Route path=':id' element={<CategoryDetails />} />
			<Route path=':id/edit' element={<SaveCategory />} />

			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default Categories;
