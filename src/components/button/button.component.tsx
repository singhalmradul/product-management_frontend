import { Link } from 'react-router-dom';
import { ButtonContainer, LinkButtonContainer } from './button..styles';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		linkTo?: string;
	};

const Button = ({ linkTo, ...props }: ButtonProps) =>
	linkTo ? (
		<LinkButtonContainer to={linkTo} {...props} />
	) : (
		<ButtonContainer {...props} />
	);
export default Button;
