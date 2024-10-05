import { Select, SelectOptionContainer } from './select-option.styles';

type SelectOptionProps<T> = Omit<
	React.SelectHTMLAttributes<HTMLSelectElement>,
	'children'
> & {
	options: T[];
	getValue: (option: T) => string;
	display: (option: T) => string;
	selectedValues?: string[];
};

const SelectOption = <T,>({
	options,
	getValue,
	display,
	selectedValues,
	...otherProps
}: SelectOptionProps<T>) => {
	return (
		<SelectOptionContainer>
			<Select {...otherProps}>
				{options.map((option) => {
					const value = getValue(option);
					return (
						<option
							key={value}
							value={value}
							selected={selectedValues?.includes(value)}
						>
							{display(option)}
						</option>
					);
				})}
			</Select>
		</SelectOptionContainer>
	);
};

export default SelectOption;
