import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;

    @media (max-width: 360px) {
        padding: 10px;
        max-width: 90vw;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 360px) {
        font-size: 20px;
        margin-bottom: 15px;
    }
`;
