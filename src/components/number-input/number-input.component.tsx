import { NumberInputContainer } from './number-input.styles';

type NumberInputProps =
	| Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type | id'>
	| { value: number | string | null };
const NumberInput = ({ value, ...props }: NumberInputProps) => {
	return <NumberInputContainer type='number' value={value ?? ''} {...props} />;
};

export default NumberInput;
