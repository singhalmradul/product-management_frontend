import styled from 'styled-components';

export const ProductSearchContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    transition: box-shadow 0.3s ease;
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    }

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const SearchResults = styled.div`
    max-height: 300px;
    overflow-y: auto;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
`;

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

export const NotFoundMessage = styled.p`
    padding: 20px;
    font-size: 16px;
    text-align: center;
    color: #999;
`;

export const Query = styled.span`
    font-style: italic;
    color: #737;
`;