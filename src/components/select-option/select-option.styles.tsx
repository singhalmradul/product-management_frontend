import styled from 'styled-components';

export const SelectOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    @media (max-width: 360px) {
        margin: 10px;
    }
`;

export const Select = styled.select`
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

    @media (max-width: 360px) {
        width: 180px;
        padding: 8px;
        font-size: 14px;
    }
`;
