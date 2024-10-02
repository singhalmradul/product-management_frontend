import styled from 'styled-components';

export const ImagePreviewContainer = styled.div`
	display: flex;
	gap: 20px;
	width: 100%;
	overflow-x: scroll;
	scroll-snap-type: x mandatory;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	transition: box-shadow 0.3s ease;

	&::-webkit-scrollbar {
		height: 4px; /* Adjust the height of the scrollbar */
	}

	&::-webkit-scrollbar-track {
		background: none; /* Background color of the scrollbar track */
	}

	&::-webkit-scrollbar-thumb {
		background: #888; /* Color of the scrollbar thumb */
		border-radius: 10px; /* Rounded corners for the thumb */
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #555; /* Color of the scrollbar thumb on hover */
	}
`;

export const ImageContainer = styled.img`
	scroll-snap-align: start;
	padding: 20px 30px;
	flex-shrink: 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
