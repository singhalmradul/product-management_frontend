import styled from 'styled-components';

export const DimensionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    align-items: center;
    padding: 10px;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: var(--background-color, #fff);
    transition: box-shadow 0.3s ease;

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
    padding: 10px;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: var(--background-color, #fff);
    transition: box-shadow 0.3s ease;

    @media (max-width: 280px) {
        align-items: flex-start;
        margin-bottom: 15px;
    }
`;

export const Checkbox = styled.input`
    margin-right: 10px;
    padding: 0.5rem;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    }

    &:focus {
        outline: none;
        border-color: var(--focus-border-color, #007bff);
    }

    @media (max-width: 280px) {
        margin-right: 0;
        margin-bottom: 5px;
    }
`;

export const CheckboxLabel = styled.label`
    font-size: var(--label-font-size, 16px);
    color: var(--label-color, #333);
    transition: color 0.3s ease;

    &:hover {
        color: var(--label-hover-color, #555);
    }

    @media (max-width: 280px) {
        font-size: 14px;
    }
`;
