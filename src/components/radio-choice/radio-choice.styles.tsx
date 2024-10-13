import styled from 'styled-components';

export const Heading = styled.h4`
	margin-bottom: 10px;
	font-size: 18px;
	color: #333;
	transition: color 0.3s ease;

	&:hover {
		color: #555;
	}

	@media (max-width: 360px) {
		font-size: 16px;
		margin-bottom: 8px;
	}
`;

export const Input = styled.input`
	margin-right: 10px;
	padding: 0.5rem;
    width: 1.5rem;
	height: 1.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

	&:hover {
		filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
	}

    &:checked::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0.8rem;
		height: 0.8rem;
		background-color: #333;
		clip-path: polygon(80% 10%, 95% 25%, 45% 95%, 5% 65%, 20% 50%, 40% 70%);
	}

	&:focus {
		outline: none;
		border-color: #007bff;
	}

	@media (max-width: 360px) {
		margin-right: 8px;
	}
`;

export const Label = styled.label`
	margin-right: 20px;
	font-size: 14px;
	color: #333;
	transition: color 0.3s ease;

	&:hover {
		color: #555;
	}

	@media (max-width: 360px) {
		margin-right: 15px;
	}
`;

export const ChoicesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	transition: box-shadow 0.3s ease;

	@media (max-width: 360px) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 15px;
	}
`;

export const Choice = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	accent-color: #fff;
	cursor: pointer;
`;
