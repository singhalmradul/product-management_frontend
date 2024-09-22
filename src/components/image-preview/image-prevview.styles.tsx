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

export const ImageContainer = styled.img`
	scroll-snap-align: start;
	padding: 20px 30px;
	flex-shrink: 0;
	margin-right: 10px;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
