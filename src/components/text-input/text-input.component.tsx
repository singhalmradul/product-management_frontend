import WithLabel from '../with-label/with-label.component';
import { Input } from './text-input.styles';

type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type | id'> & {
    label: string;
};



const TextInput = ({ label, ...otherProps }: TextInputProps) => {
    return <WithLabel label={label} element={<Input {...otherProps} type='text' />} />;
};
export default TextInput;