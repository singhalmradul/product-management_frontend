import { FormEvent, FormHTMLAttributes } from 'react';
import Button from '../button/button.component';
import { FormContainer, Title } from './form.styles';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
	title?: string;
	onSubmit: (event: FormEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
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
	const handleClick = (
		event: FormEvent<HTMLButtonElement | HTMLAnchorElement>
	) => {
		event.preventDefault();
		onSubmit(event);
	};

	return (
		<>
			{title && <Title>{title}</Title>}
			<FormContainer {...otherProps}>
				{children}
				<Button onClick={handleClick} disabled={buttonDisabled}>
					{buttonText}
				</Button>
			</FormContainer>
		</>
	);
};

export default Form;
