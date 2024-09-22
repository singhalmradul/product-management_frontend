import { DetailContainer, DetailName, DetailValue } from './detail.styles';

type DetailProps = {
	label: string;
	value: string | number | null;
};

export const Detail = ({ label, value }: DetailProps) => {
	return (
		<DetailContainer>
			<DetailName>{label}</DetailName>
			<DetailValue>{value ?? 'N/A'}</DetailValue>
		</DetailContainer>
	);
};
