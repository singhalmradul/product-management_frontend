import { NumberInputContainer } from './number-input.styles';

type NumberInputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'type | id'
>;

const NumberInput = ({ ...props }: NumberInputProps) => {
	return <NumberInputContainer type='number' {...props} />;
};

export default NumberInput;
