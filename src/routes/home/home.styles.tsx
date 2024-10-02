import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const HomeTitle = styled.h1`
	font-size: 2rem;
	margin-bottom: 20px;
	background: radial-gradient(
		// closest-corner at 0% 0%,
        circle,
		#ff9999,
		#ff7399,
		#fffb99,
		#48ff99,
		#99ffd5,
		#992bff,
		#7a99ff,
		#ff99e6
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
