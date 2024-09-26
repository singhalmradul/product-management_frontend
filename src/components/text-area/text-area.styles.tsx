import styled from 'styled-components';

export const TextAreaContainer = styled.textarea`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    resize: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    }

    &:focus {
        outline: none;
        border-color: var(--focus-border-color, #007bff);
    }

    @media (max-width: 360px) {
        padding: 8px;
        margin-bottom: 15px;
    }
`;
