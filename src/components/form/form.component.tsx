import Button from '../button/button.component';
import { FormContainer, Title } from './form.styles';

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
    title: string;
	onSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
	buttonText: string;
};

const Form = ({
	title,
	buttonText,
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
				<Button onClick={handleClick}>{buttonText}</Button>
			</FormContainer>
		</>
	);
};

export default Form;
