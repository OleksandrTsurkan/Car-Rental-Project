import styled from 'styled-components';

export const ButtonStyled = styled.button`
  height: 30px;
  width: 100px;
  padding: ${props => props.$padding || '14px 44px'};
  font-weight: 500px;
  color: black;
  background-color: #3f51b5;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;
