import { ButtonContainer } from './button..styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...props }: ButtonProps) => {
	return <ButtonContainer {...props} />;
};

export default Button;
