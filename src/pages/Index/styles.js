import styled from 'styled-components';

import background from '../../static/background.png';
import {NavLink} from "react-router-dom";

export const Section = styled.section`
  margin-bottom: ${({marginBottom}) => marginBottom}px;
`;

export const HeadSectionContent = styled.div`
  position: relative;

  width: 100%;
  height: 735px;

  background-image: url(${background});
  background-size: cover;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 56px;
  line-height: 89px;

  margin-bottom: 20px;
  text-align: ${({textAlign}) => textAlign || 'center'};
`;

export const MontageInfo = styled.div`
  position: absolute;

  top: 74px;
  right: 324px;

  text-align: right;
  font-size: 54px;
  line-height: 75px;
  color: #ffffff;
  font-weight: 700;
`;

export const Age = styled.div`
  padding: 15px;
  position: absolute;

  top: 58px;
  right: 77px;

  width: 180px;
  height: 191px;

  background: #ffffff;
`;

export const AgeNumber = styled.div`
  color: #E68700;
  font-size: 72px;
  line-height: 86px;
  font-weight: 500;
  text-align: center;
`;

export const AgeText = styled.div`
  color: #000000;
  font-size: 36px;
  line-height: 54px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export const AgeInfo = styled.div`
  color: #999999;
  font-size: 18px;
  line-height: 27px;
  font-weight: 500;
  text-align: center;
`;

export const ContactUsButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -75px;
`;

export const ContactUsButton = styled.button`
  padding: 32px 200px;
  font-size: 56px;
  font-weight: 700;
  color: #000000;

  background: #E68700;

  border-radius: 25px;
  border: 1px solid #777777;

  cursor: pointer;

  transition: .2s;

  &:hover {
    background: #bb6f01;
  }
`;

export const AboutCompany = styled.div`
  display: flex;
`;

export const AboutImageWrapper = styled.div`
  width: 694px;
  height: 855px;

  margin-right: 127px;
`;

export const AboutTextWrapper = styled.div`
  max-width: 1041px;

  font-size: 28px;
`;

export const AboutText = styled.div`
  margin-bottom: 82px;
`;

export const MoreLink = styled(NavLink)`
  display: block;

  font-size: 28px;
  text-align: right;
  text-decoration: none;
  color: #777777;
`;

export const WhatWeDoingItems = styled.div`
  display: flex;

  margin: 0 54px;
`;

export const WhatWeDoingItem = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 295px;
`;

export const WhatWeDoingDivider = styled.div`
  width: 2px;
  height: 200px;

  margin: 0 40px;

  background: #DEDEDE;
`;

export const WhatWeDoingItemIconWrapper = styled.div`
  width: 200px;
  height: 200px;

  margin-bottom: 40px;
`;

export const WhatWeDoingItemText = styled.div`
  font-size: 28px;
  line-height: 44px;
  color: #000000;
  text-align: center;
`;

export const ProjectsContent = styled.div`
  display: flex;

  margin-left: 109px;
  margin-right: 71px;
`;

export const ProjectsWrapper = styled.div`
  display: flex;

  margin-right: 62px;
`;

export const ProjectWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const ProjectMore = styled(NavLink)`
  display: flex;

  flex-direction: column-reverse;

  text-align: right;
  text-decoration: none;
  color: #777777;
  font-size: 28px;
`;

export const InfoWrapper = styled.div`
  border-top: 1px solid #000000;
  
  padding-top: 40px;
`;

export const Info = styled.div`
  display: flex;

  justify-content: space-between;

  margin: 0 220px;
`;

export const InfoItem = styled.div`

`;

export const InfoItemTitle = styled.h4`
  font-size: 32px;
  font-weight: 500;

  text-align: center;
`;

export const InfoItemContent = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;

  height: 227px;

  font-size: 22px;
`;

