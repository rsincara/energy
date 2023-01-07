import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Header = styled.header`
  display: flex;

  justify-content: space-between;

  padding: 36px 31px 26px 55px;

  color: #000000;

  box-shadow: -3px 9px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
`;

export const EnergyLogoWrapper = styled.div`
  width: 480px;
  height: 36px;
  margin-right: 99px;
`;

export const ESasLogoWrapper = styled.div`
  width: 158px;
  height: 76px;
  margin-right: 90px;
`;

export const GeneralContent = styled.div`
  font-size: 14px;
  line-height: 2.8px;
  font-weight: 500;
`;

export const GeneralInfo = styled.div`
  display: flex;

  justify-content: space-between;

  width: 100%;

  margin-bottom: 42px;
`;

export const ItemWrapper = styled.div`
  display: flex;

  align-items: center;

  &:not(:last-child) {
    margin-right: 120px;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 9px;
`;

export const LinkUtil = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Navbar = styled.nav`
  display: flex;
  
  justify-content: space-between;
`;

export const NavItem = styled(NavLink)`
  display: block;

  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  
  transition: .2s;
  
  &:hover, &.active {
    color: #E68700;
  }
`;
