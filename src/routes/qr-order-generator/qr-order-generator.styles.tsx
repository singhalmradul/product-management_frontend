import styled from 'styled-components';

export const QrOrderGeneratorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const QrOrderGeneratorTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
    background: radial-gradient(
        circle,
        #ff9999,
        #ff7399,
        #fffb99,
        #48ff99,
        #99ffd5,
        #992bff,
        #7a99ff,
        #ff99e6
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;