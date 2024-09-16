import WithLabel from '../with-label/with-label.component';
import { TextAreaContainer } from './text-area.styles';

type WithLabelProps = Omit<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	'id'
> & {
	label: string;
};

const TextArea = ({ label, ...otherProps }: WithLabelProps) => {
	return (
		<WithLabel label={label} element={<TextAreaContainer {...otherProps} />} />
	);
};

export default TextArea;
