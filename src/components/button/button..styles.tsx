import { Link } from 'react-router-dom';
import styled from 'styled-components';

const styles =`
    padding: 10px 20px;
    margin: 10px 5px;
    border: none;
    border-radius: 4px;
    width: 100%;
    max-width: 600px;
    background: var(--theme, #997bff);
    background-size: var(--theme-background-size);
    animation: var(--theme-animation);
    color: white;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    }
`;

export const ButtonContainer = styled.button`
    ${styles}
`;

export const LinkButtonContainer = styled(Link)`
    ${styles}
`;