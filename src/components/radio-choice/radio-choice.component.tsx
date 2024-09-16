import { ChangeEvent } from 'react';
import { snakeCase } from '../../utilities/helper.utility';
import { ChoicesContainer, Heading, Input, Label } from './radio-choice.styles';

type RadioChoiceProps = {
	name: string;
	label: string;
	choices: string[];
	selectedChoice: string;
	preChoiceElement?: React.ReactNode;
	onChoiceChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioChoice = ({
	name,
	label,
	choices,
	selectedChoice,
	preChoiceElement,
	onChoiceChange,
}: RadioChoiceProps) => {
	return (
		<div>
			<Heading>{label}</Heading>
			<ChoicesContainer>
				{preChoiceElement}
				{choices.map((choice) => {
					const id = `${snakeCase(label)}_${choice}`;

					return (
						<div key={choice}>
							<Input
								type='radio'
								name={name}
								value={choice}
								id={id}
								defaultChecked={selectedChoice === choice}
								onChange={onChoiceChange}
							/>
							<Label htmlFor={id}>{choice}</Label>
						</div>
					);
				})}
			</ChoicesContainer>
		</div>
	);
};

export default RadioChoice;
