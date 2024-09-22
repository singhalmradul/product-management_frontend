import { Select, SelectOptionContainer } from './select-option.styles';

type SelectOptionProps<T> = Omit<
	React.SelectHTMLAttributes<HTMLSelectElement>,
	'children'
> & {
	options: T[];
	values: (option: T) => string;
	display: (option: T) => string;
};

const SelectOption = <T,>({ options, values, display, ...otherProps }: SelectOptionProps<T>) => {

	return (
		<SelectOptionContainer>
			<Select {...otherProps}>
				{options.map((option, index) => {
						return (
							<option key={index} value={values(option)}>
								{display(option)}
							</option>
						);
					}
				)}
			</Select>
		</SelectOptionContainer>
	);
};

export default SelectOption;
