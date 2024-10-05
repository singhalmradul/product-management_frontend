import WithLabel from '../with-label/with-label.component';
import { TextAreaContainer } from './text-area.styles';

type WithLabelProps = Omit<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	'value' | 'id'
> & {
	label: string;
	value?: string | null;
};
const TextArea = ({ label, value, ...otherProps }: WithLabelProps) => {
	return (
		<WithLabel
			label={label}
			element={<TextAreaContainer value={value ?? ''} {...otherProps} />}
		/>
	);
};

export default TextArea;
