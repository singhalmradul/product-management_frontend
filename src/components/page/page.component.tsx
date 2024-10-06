import { HTMLAttributes } from 'react';
import { PageContainer, Title } from './page.styles';

type PageProps = HTMLAttributes<HTMLDivElement> & {
	title?: string;
};

const Page = ({ title, children, ...props }: PageProps) => {
	return (
		<PageContainer {...props}>
			{title && <Title>{title}</Title>}
			{children}
		</PageContainer>
	);
};

export default Page;
