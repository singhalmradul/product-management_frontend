import styled from 'styled-components';

export const Label = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 16px;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
        color: #555;
    }

    @media (max-width: 360px) {
        margin-bottom: 6px;
        font-size: 14px;
    }
`;

export const WithLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: box-shadow 0.3s ease;

    @media (max-width: 360px) {
        padding: 0.5rem;
    }
`;
