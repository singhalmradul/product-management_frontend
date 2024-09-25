import styled from 'styled-components';

export const NumberInputContainer = styled.input`
    border: 1px solid black;
    padding: 0.5rem;
    font-size: 12px;
    width: 80px;
    margin: 0.5rem 0;

    &::placeholder {
        font-size: 12px;
    }

    @media (max-width: 280px) {
        width: 70px;
        padding: 0.4rem;

        &::placeholder {
            font-size: 11px;
        }
    }
`;
