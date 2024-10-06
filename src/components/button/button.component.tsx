import { Link } from 'react-router-dom';
import { ButtonContainer } from './button..styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	linkTo?: string;
};

const Button = ({ linkTo, ...props }: ButtonProps) => {
	if (linkTo) {
		return <Link to={linkTo}>
			<ButtonContainer {...props} />
		</Link>
	}
	return <ButtonContainer {...props} />;
};

export default Button;
