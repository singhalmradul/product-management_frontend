import Search from '../../components/search/search.component';

import { Category } from '../../store/category/category.types';

import { searchCategoriesStart } from '../../store/category/category.slice';

import {
	selectCategories,
	selectCategoryIsLoading,
} from '../../store/category/category.selector';

import { CategoryName, SearchResult } from './category-search.styles';
import Button from '../../components/button/button.component';

const SearchResultComponent = ({ id, name }: Category) => (
	<SearchResult key={id} >
		<CategoryName to={id}> {name}
		</CategoryName>
	 <Button onClick={() => window.alert('not implemented')}>products</Button>
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
