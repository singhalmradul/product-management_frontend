import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnknownAction } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';

import Spinner from '../spinner/spinner.component';

import {
	MessageContainer,
	SearchContainer,
	Query,
	SearchInput,
	SearchResults,
} from './search.styles';

type SearchProps<T> = {
	name: string;
	resultsSelector: (state: RootState) => T[];
	isLoadingSelector: (state: RootState) => boolean;
	searchAction: (query: string) => UnknownAction & { payload: string };
	resetAction: () => UnknownAction;
	searchResultComponent: (
		item: T,
		additionalProps?: Record<string, unknown>
	) => ReactNode;
	showEmptyMessage?: boolean;
	additionalProps?: Record<string, unknown>;
};

const Search = <T,>({
	name,
	resultsSelector,
	isLoadingSelector,
	searchAction,
	resetAction,
	searchResultComponent,
	additionalProps,
	showEmptyMessage = true,
}: SearchProps<T>) => {
	const [query, setQuery] = useState('');
	const results = useSelector(resultsSelector);
	const isLoading = useSelector(isLoadingSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(resetAction());
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		if (value.trim()) {
			dispatch(searchAction(value));
		}
	};

	return (
		<SearchContainer>
			<SearchInput
				type='text'
				value={query}
				onChange={handleChange}
				placeholder={`Search ${name}...`}
			/>
			{results.length > 0 && (
				<SearchResults>
					{results.map((result) => searchResultComponent(result, additionalProps))}
				</SearchResults>
			)}
			{isLoading ? (
				<Spinner />
			) : (
				showEmptyMessage &&
				results.length === 0 && (
					<MessageContainer>
						{query.trim().length > 0 ? (
							<>
								We couldn't find any {`${name}`} matching <Query>{query}</Query>
								.
								<br /> Try refining your search or using different keywords.
							</>
						) : (
							<>Search for {`${name}`} by typing in the search box above.</>
						)}
					</MessageContainer>
				)
			)}
		</SearchContainer>
	);
};

export default Search;
