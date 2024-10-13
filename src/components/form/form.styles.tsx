import styled from 'styled-components';

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 400px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	transition: box-shadow 0.3s ease;

	@media (max-width: 360px) {
		padding: 10px;
		max-width: 90vw;
	}

	@media (min-width: 768px) {
		width: 50vw;
	}
`;

export const Title = styled.h1`
	font-size: 24px;
	margin-bottom: 20px;
	text-align: center;
	color: #333;
	transition: color 0.3s ease;

	&:hover {
		color: #555;
	}

	@media (max-width: 360px) {
		font-size: 20px;
		margin-bottom: 15px;
	}
`;
