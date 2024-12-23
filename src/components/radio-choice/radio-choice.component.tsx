import { ChangeEvent, ReactNode } from 'react';
import { snakeCase } from '../../utilities/helper.utility';
import { Choice, ChoicesContainer, Heading, Input, Label } from './radio-choice.styles';

type RadioChoiceProps<T extends string> = {
	name: string;
	label: string;
	choices: T[];
	selectedChoice?: T | null;
	preChoiceElement?: ReactNode;
	onChoiceChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioChoice = <T extends string>({
	name,
	label,
	choices,
	selectedChoice,
	preChoiceElement,
	onChoiceChange,
}: RadioChoiceProps<T>) => {
	return (
		<div>
			<Heading>{label}</Heading>
			<ChoicesContainer>
				{preChoiceElement}
				{choices.map((choice) => {
					const id = `${snakeCase(label)}_${snakeCase(choice)}`;
					return (
						<Choice key={choice}>
							<Input
								type='radio'
								name={name}
								value={choice}
								id={id}
								defaultChecked={selectedChoice === choice}
								onChange={onChoiceChange}
							/>
							<Label htmlFor={id}>{choice}</Label>
						</Choice>
					);
				})}
			</ChoicesContainer>
		</div>
	);
};

export default RadioChoice;
