import styled from 'styled-components';

export const NumberInputContainer = styled.input`
	border: 1px solid black;
	padding: 0.5rem;
	font-size: 12px;
	width: 100%;
	margin: 0.5rem;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: border-color 0.3s ease, box-shadow 0.3s ease;

	-moz-appearance: textfield;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&::placeholder {
		font-size: 12px;
	}

	&:hover {
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
	}

	&:focus {
		outline: none;
		border-color: #007bff;
	}

	@media (max-width: 360px) {
		width: 70px;
		padding: 0.4rem;

		&::placeholder {
			font-size: 11px;
		}
	}
`;
