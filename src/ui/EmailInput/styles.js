import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000000;  
  width: 347px;
`;

export const Label = styled.label`
  display: block;
  
  font-size: 14px;
  margin-bottom: 12px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  
  left: 4px;
  
  display: flex;
  align-items: center;
  
  width: 32px;
  height: 32px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  
  outline: 0;
  border: 1px solid #000000;
  border-radius: 10px;
  
  padding-left: 40px;
`;
