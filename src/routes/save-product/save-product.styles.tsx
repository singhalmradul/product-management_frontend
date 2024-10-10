import styled from 'styled-components';

export const DimensionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.5rem 0;
	align-items: center;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	transition: box-shadow 0.3s ease;

	@media (max-width: 360px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	gap: 10px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	transition: box-shadow 0.3s ease;

	@media (max-width: 360px) {
		align-items: flex-start;
		margin-bottom: 15px;
	}
`;

export const Checkbox = styled.input`
	margin-right: 10px;
	padding: 0.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	accent-color: #ff7399;
	cursor: pointer;
	appearance: none;
	background-color: #999;
	position: relative;

	&:checked {
		background-color: #ff7399;
	}

	&:checked::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0.8rem;
		height: 0.8rem;
		background-color: #fff; /* or whatever color you want the tick to be */
		clip-path: polygon(80% 10%, 95% 25%, 45% 95%, 5% 65%, 20% 50%, 40% 70%);
	}

	@media (max-width: 360px) {
		margin-right: 0;
		margin-bottom: 5px;
	}
`;

export const CheckboxLabel = styled.label`
	font-size: 16px;
	color: #333;
	transition: color 0.3s ease;

	&:hover {
		color: #555;
	}

	@media (max-width: 360px) {
		font-size: 14px;
	}
`;
