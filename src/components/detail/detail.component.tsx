import { DetailContainer, DetailName, DetailValue } from './detail.styles';

type DetailProps = {
	label: string;
	value: string | number | null;
	defaultValue?: string;
};

const Detail = ({ label, value, defaultValue }: DetailProps) => {
	return (
		<DetailContainer>
			<DetailName>{label}</DetailName>
			<DetailValue>{value ?? defaultValue ?? 'N/A'}</DetailValue>
		</DetailContainer>
	);
};

export default Detail;
