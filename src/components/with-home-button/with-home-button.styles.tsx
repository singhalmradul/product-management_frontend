import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WithHomeButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;

    @media (max-width: 360px) {
        padding: 10px;
        gap: 10px;
    }
`;

export const HomeButton = styled(Link)`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    @media (max-width: 360px) {
        padding: 8px 16px;
    }
`;
