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
    border-radius: 5px;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);


	&.active {
        box-shadow: none;
	}

	&:hover {
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 600px) {
		font-size: 14px;
	}
`;
