import Search from '../../components/search/search.component';

import Category from '../../store/category/category.types';

import { searchCategoriesStart } from '../../store/category/category.slice';

import {
	selectCategories,
	selectCategoryIsLoading,
} from '../../store/category/category.selector';

import { SearchResult } from './category-search.styles';

const SearchResultComponent = ({ id, name }: Category) => (
	<SearchResult key={id} to={`/view/category/${id}`}>
		{name}
	</SearchResult>
);

const CategorySearch = () => {
	return (
		<Search<Category>
			name='categories'
			resultsSelector={selectCategories}
			isLoadingSelector={selectCategoryIsLoading}
			searchAction={searchCategoriesStart}
			searchResultComponent={SearchResultComponent}
		/>
	);
};

export default CategorySearch;
