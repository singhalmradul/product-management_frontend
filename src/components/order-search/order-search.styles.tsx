import styled from 'styled-components';

export const SearchResult = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 10px;
	border-bottom: 1px solid #eee;
	font-size: 14px;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #f1f1f1;
	}

	&:last-child {
		border-bottom: none;
	}
`;

export const SearchResults = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 300px;
    overflow-y: auto;
    border-top: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
`;