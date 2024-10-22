import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchResult = styled.div`
    padding: 10px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f1f1f1;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const ProductName = styled(Link)`
    width: 100%;
`;