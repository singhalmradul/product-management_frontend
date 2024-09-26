import styled from 'styled-components';

export const NumberInputContainer = styled.input`
    border: 1px solid var(--border-color, black);
    padding: 0.5rem;
    font-size: var(--font-size, 12px);
    width: 80px;
    margin: 0.5rem 0;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &::placeholder {
        font-size: var(--placeholder-font-size, 12px);
    }

    &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    }

    &:focus {
        outline: none;
        border-color: var(--focus-border-color, #007bff);
    }

    @media (max-width: 280px) {
        width: 70px;
        padding: 0.4rem;

        &::placeholder {
            font-size: 11px;
        }
    }
`;
