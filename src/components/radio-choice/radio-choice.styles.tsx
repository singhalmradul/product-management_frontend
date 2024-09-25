import styled from 'styled-components';

export const Heading = styled.h4`
    margin-bottom: 10px;
    font-size: 18px;

    @media (max-width: 360px) {
        font-size: 16px;
        margin-bottom: 8px;
    }
`;

export const Input = styled.input`
    margin-right: 10px;

    @media (max-width: 360px) {
        margin-right: 8px;
    }
`;

export const Label = styled.label`
    margin-right: 20px;

    @media (max-width: 360px) {
        margin-right: 15px;
    }
`;

export const ChoicesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 360px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 15px;
    }
`;
