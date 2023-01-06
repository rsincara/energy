import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  
  width: 100%;
  
  align-items: center;
  
  justify-content: center;
  
  padding: 16px 62px;
  
  font-weight: 700;
  font-size: 22px;
  line-height: 16px;

  background: #E68700;
  border: 1px solid #E68700;
  border-radius: 10px;
  
  outline: 0;

  cursor: pointer;

  transition: .2s;

  &:hover {
    background: #bb6f01;
  }
  
  &:disabled {
    background: #dedede;
    border: 1px solid #dedede;
  }
`;
