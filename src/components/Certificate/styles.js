import styled from "styled-components";

export const ImgWrapper = styled.div`
  width: 432px;
  transition: .5s;
`;

export const Certificate = styled.div`
  width: 432px;
  
  &:hover {
    ${ImgWrapper} {
      transform: scale(1.2);
    }   
  }
`;

export const Description = styled.div`
  font-size: 28px;
  line-height: 39px;
  color: #777777;
  
  text-align: center;
`;
