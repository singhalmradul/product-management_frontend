import styled from 'styled-components';

export const Label = styled.label`
    margin-bottom: 8px;
    font-weight: bold;

    @media (max-width: 360px) {
        margin-bottom: 6px;
        font-size: 14px;
    }
`;

export const WithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 360px) {
        padding: 0.5rem;
    }
`;
