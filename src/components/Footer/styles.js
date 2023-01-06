import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Footer = styled.footer`
  display: flex;

  padding: 35px 150px 46px 190px;

  background: rgba(186, 186, 186, 0.2);
`;

export const Logos = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;

  margin-top: 25px;
  margin-right: 214px;
`;

export const EnergyLogoWrapper = styled.div`
  width: 480px;
  height: 36px;

  margin-bottom: 11px;
`;

export const ESasLogoWrapper = styled.div`
  width: 158px;
  height: 76px;
`;

export const Block = styled.div`
  &:not(:last-child) {
    margin-right: 190px;
  }
`;

export const BlockTitle = styled.h4`
  margin-bottom: 16px;

  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
`;

export const Items = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  height: ${({height}) => height}px;
`;

export const ItemWrapper = styled.div`
  display: flex;

  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 14px;

  margin-right: 16px;
`;

export const EmailIconWrapper = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const MobileIconWrapper = styled.div`
  width: 14px;
`;

export const PointerIconWrapper = styled.div`
  display: flex;
  width: 14px;
  height: 14px;
`;

export const LinkUtil = styled.a`
  text-decoration: none;

  font-size: 14px;
  color: #777777;
`;

export const PointerInfo = styled.div`
  font-size: 14px;
  color: #777777;
`;

export const GeneralLinksIconWrapper = styled.div`
  display: flex;

  width: 12px;
  height: 12px;
  margin-right: 11px;
`;

export const GeneralLink = styled(NavLink)`
  text-decoration: none;
  color: #777777;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #777777;
`;
