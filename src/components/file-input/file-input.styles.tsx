import styled from 'styled-components';

export const Input = styled.input`
    display: none;
`;

export const Label = styled.label`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    background-color: #f9f9f9;
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const FileInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const FilesPreview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const FilePreview = styled.embed`
    margin-right: 10px;
    width: 100px;
    height: 100px;
`;