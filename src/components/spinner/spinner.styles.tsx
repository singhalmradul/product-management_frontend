import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: 0.8);
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  -webkit-animation: spin 1s ease-in-out infinite;
  animation: spin 1s ease-in-out infinite;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:focus {
    outline: none;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
