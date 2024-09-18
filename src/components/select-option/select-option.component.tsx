import { Select, SelectOptionContainer } from './select-option.styles';

type SelectOptionProps = Omit<
	React.SelectHTMLAttributes<HTMLSelectElement>,
	'children'
> & {
	options: any[];
	field?: string;
};

const SelectOption = ({ options, field, ...otherProps }: SelectOptionProps) => {
	return (
		<SelectOptionContainer>
			<Select {...otherProps}>
				{options.map((option, index) => {
					const value = field ? option[field] : option;
					return (
						<option key={index} value={value}>
							{value}
						</option>
					);
				})}
			</Select>
		</SelectOptionContainer>
	);
};

export default SelectOption;
