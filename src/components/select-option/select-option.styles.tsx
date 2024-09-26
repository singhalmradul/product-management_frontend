import styled from 'styled-components';

export const SelectOptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
	padding: 10px;
	background-color: var(--background-color, #fff);
	transition: box-shadow 0.3s ease;

	@media (max-width: 360px) {
		margin: 10px;
	}
`;

export const Select = styled.select`
	width: 200px;
	padding: 10px;
	border: 1px solid var(--border-color, #ccc);
	border-radius: 4px;
	font-size: var(--font-size, 16px);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: border-color 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
	}

	&:focus {
		outline: none;
		border-color: var(--focus-border-color, #007bff);
	}

	@media (max-width: 360px) {
		width: 180px;
		padding: 8px;
		font-size: 14px;
	}
`;
