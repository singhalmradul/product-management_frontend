import styled from 'styled-components';

export const DimensionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    align-items: center;

    @media (max-width: 360px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
    @media (max-width: 280px) {
        align-items: flex-start;
        margin-bottom: 15px;
    }
`;

export const Checkbox = styled.input`
    margin-right: 10px;

    @media (max-width: 280px) {
        margin-right: 0;
        margin-bottom: 5px;
    }
`;

export const CheckboxLabel = styled.label`
    font-size: 16px;

    @media (max-width: 280px) {
        font-size: 14px;
    }
`;