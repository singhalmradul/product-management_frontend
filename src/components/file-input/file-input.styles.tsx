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
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const FilesPreview = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;

    &::-webkit-scrollbar {
        height: 4px; /* Adjust the height of the scrollbar */
    }

    &::-webkit-scrollbar-track {
        background: none; /* Background color of the scrollbar track */
        // border-radius: 10px; /* Rounded corners for the track */
    }

    &::-webkit-scrollbar-thumb {
        background: #888; /* Color of the scrollbar thumb */
        border-radius: 10px; /* Rounded corners for the thumb */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; /* Color of the scrollbar thumb on hover */
    }
`;

export const FilePreview = styled.img`
    scroll-snap-align: start;
    padding: 20px  30px;
    flex-shrink: 0;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;