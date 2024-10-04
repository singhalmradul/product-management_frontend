import Button from '../button/button.component';
import { FormContainer, Title } from './form.styles';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
	title: string;
	onSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
	buttonText: string;
	buttonDisabled?: boolean;
};

const Form = ({
	title,
	buttonText,
	buttonDisabled,
	children,
	onSubmit,
	...otherProps
}: FormProps) => {
	const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
		onSubmit(event);
	};

	return (
		<>
			<Title>{title}</Title>
			<FormContainer {...otherProps}>
				{children}
				<Button onClick={handleClick} disabled={buttonDisabled ?? false}>
					{buttonText}
				</Button>
			</FormContainer>
		</>
	);
};

export default Form;
