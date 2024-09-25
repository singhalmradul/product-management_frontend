import styled from 'styled-components';

export const ProductSearchContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

export const SearchResults = styled.div`
    max-height: 300px;
    overflow-y: auto;
    border-top: 1px solid #ccc;
    padding-top: 10px;
`;

export const SearchResult = styled.div`
    padding: 10px;
    border-bottom: 1px solid #eee;
    font-size: 14px;

    &:hover {
        background-color: #f1f1f1;
    }

    &:last-child {
        border-bottom: none
    }
`;
