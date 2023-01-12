import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const Project = styled(NavLink)`
  display: block;
  
  max-width: 350px;
  
  text-decoration: none;
`;

export const PhotoWrapper = styled.div`
  width: 350px;
  height: 225px;

  overflow: hidden;
  
  margin-bottom: 45px;
`;

export const Divider = styled.div`
  width: 55px;
  height: 6px;

  margin-bottom: 15px;

  background: #E68700;
`;

export const Title = styled.h4`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: #404149;

  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #999999;
`;


