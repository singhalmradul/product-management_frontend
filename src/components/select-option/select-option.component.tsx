import React from 'react';
import {
	DataList,
	Option,
	SearchContainer,
	SearchInput,
} from './select-option.styles';

type SelectOptionProps = React.HTMLProps<HTMLInputElement> & {
	options: { name: string }[];
	name: string;
};

const SelectOption = ({ options, name, ...inputProps }: SelectOptionProps) => {
	return (
		<SearchContainer>
			<SearchInput list={name} {...inputProps} />
			<DataList id={name}>
				<Option value='' />
				{options.map((option, index) => (
					<Option key={index} value={option.name} />
				))}
			</DataList>
		</SearchContainer>
	);
};

export default SelectOption;
