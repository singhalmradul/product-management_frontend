import styled from 'styled-components';

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
`;

export const SearchInput = styled.input`
	width: 200px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
`;

export const DataList = styled.datalist`
	width: 200px;
	margin-top: 10px;
`;
export const Option = styled.option`
	padding: 5px;
	font-size: 16px;
`;
