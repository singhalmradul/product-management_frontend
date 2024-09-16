import { ChangeEvent } from 'react';
import { snakeCase } from '../../utilities/helper.utility';
import { ChoicesContainer, Heading, Input, Label } from './radio-choice.styles';

type RadioChoiceProps = {
	name: string;
	label: string;
	choices: string[];
	selectedChoice: string;
	onChoiceChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioChoice = ({
	name,
	label,
	choices,
	selectedChoice,
	onChoiceChange,
}: RadioChoiceProps) => {
	return (
		<div>
			<Heading>{label}</Heading>
			<ChoicesContainer>
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
