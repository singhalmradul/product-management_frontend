import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const ContentWrapper = styled.div`
    flex: 1;  // This allows the content to expand and take up the available space
`;

export const NavigationBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #997bff;
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

    &.active {
        font-weight: bold;
        color: #ffc197;
    }

    &:hover {
        color: #fcc;
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;