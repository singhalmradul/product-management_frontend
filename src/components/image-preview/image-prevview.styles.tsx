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
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
`;

export const RemoveButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 5px;
	border: none;
	border-radius: 50%;
	background-color: #fff;
	color: #333;
	font-size: 20px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #f1f1f1;
	}
`;

export const ImageContainer = styled.div`
	scroll-snap-align: start;
	padding: 20px 30px;
	flex-shrink: 0;
	width: 100%;
	height: 100%;
	position: relative;
`;
