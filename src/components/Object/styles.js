import styled from "styled-components";
import {NavLink} from "react-router-dom";


export const ObjectWrapper = styled.div`
  width: 558px;
`;

export const Object = styled.div`
  border-left: 1px solid #DEDEDE;
  border-right: 1px solid #DEDEDE;

  padding: 0 2px 32px;
`;

export const SliderWrapper = styled.div`
  width: 555px;
  
  margin-bottom: 55px;
  
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Link = styled(NavLink)`
  display: flex;
  
  align-items: center;
  justify-content: center;
  
  height: 100px;
  
  margin-bottom: 13px;
  padding: 0 8px;
  
  background: #DDDDDD;
  
  text-decoration: none;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
`;

export const City = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 113px;
  height: 43px;

  background: #F3F3F3;
  
  font-size: 14px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 8px;
  
  background: #4574AA;
`;
