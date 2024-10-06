import { Link } from 'react-router-dom';
import styled from 'styled-components';

const styles =`
    padding: 10px 20px;
    margin: 10px 5px;
    border: none;
    border-radius: 4px;
    background: var(--theme, #997bff);
    background-size: var(--theme-background-size);
    animation: var(--theme-animation);
    color: white;
    cursor: pointer;
    font-size: 16px;
    text-align: center;

    &:hover {
    background-color: #9956b3;
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