import styled from 'styled-components';

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 2rem;
	margin-bottom: 20px;
	background: var(--theme, #997bff);
	background-size: var(--theme-background-size);
	animation: var(--theme-animation);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
