import styled from 'styled-components';

export const Input = styled.input`
    display: none;
`;

export const Label = styled.label`
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #f9f9f9;
    &:hover {
        background-color: #f0f0f0;
    }

    @media (max-width: 360px) {
        padding: 8px;
        font-size: 14px;
    }
`;

export const FileInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 360px) {
        margin-bottom: 15px;
    }
`;
