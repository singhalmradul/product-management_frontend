import styled from 'styled-components';

export const TextAreaContainer = styled.textarea`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;

    @media (max-width: 360px) {
        padding: 8px;
        margin-bottom: 15px;
    }
`;
