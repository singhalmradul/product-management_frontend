import React from 'react';
import {
	DataList,
	Option,
	SearchContainer,
	SearchInput,
} from './search-option.styles';

type SelectOptionProps = React.HTMLProps<HTMLInputElement> & {
	options: { name: string }[];
	name: string;
	onOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchOption = ({
	options,
	name,
	onOptionChange,
	...inputProps
}: SelectOptionProps) => {
	return (
		<SearchContainer>
			<SearchInput list={name} onChange={onOptionChange} {...inputProps} />
			<DataList id={name}>
				<Option value='' />
				{options.map((option, index) => (
					<Option key={index} value={option.name} />
				))}
			</DataList>
		</SearchContainer>
	);
};

export default SearchOption;
