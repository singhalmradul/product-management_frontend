import { FloatInputContainer } from './float-input.styles';

type FloatInputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'type | id'
>;

const FloatInput = ({ ...props }: FloatInputProps) => {
	return <FloatInputContainer type='number' step='0.01' {...props} />;
};

export default FloatInput;
