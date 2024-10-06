import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const ContentWrapper = styled.div`
	flex: 1;
`;

export const NavigationBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background: var(--theme, #997bff);
	background-size: var(--theme-background-size);
	animation: var(--theme-animation);
	color: white;
	position: sticky;
	bottom: 0;
	z-index: 1000;

	@media (max-width: 600px) {
		flex-direction: column;
		padding: 10px;
	}
`;

export const NavigationLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	font-size: 16px;
	padding: 5px;

	&.active {
		border: 1px solid;
		border-radius: 5px;
	}

	&:hover {
        transform: scale(1.1);
		color: #fcc;
	}

	@media (max-width: 600px) {
		font-size: 14px;
	}
`;
