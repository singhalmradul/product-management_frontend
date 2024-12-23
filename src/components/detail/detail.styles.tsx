import styled from 'styled-components';

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
`;

export const DetailName = styled.span`
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1.1rem;
    color: #333;
`;

export const DetailValue = styled.span`
    font-size: 1.2rem;
    color: #666;
    transition: color 0.3s ease;

    &:hover {
        color: #333;
    }
`;
