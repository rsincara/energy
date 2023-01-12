import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 74px;
  margin-bottom: 62px;

  font-weight: 700;
  font-size: 54px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;

  margin: 0 100px 73px;
`;

export const ObjectWrapper = styled.div`
  flex-shrink: 0;
  
  width: 783px;
  
  margin-right: 160px;
`;

export const Object = styled.div`
  border-left: 1px solid #DEDEDE;
  border-right: 1px solid #DEDEDE;

  padding: 0 2px;
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 476px;
  
  overflow: hidden;
  
  margin-bottom: 55px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 8px;
  
  background: #4574AA;
`;

export const Info = styled.div`
  margin-top: 90px;
`;

export const TextInfo = styled.p`
  font-weight: 500;
  font-size: 36px;
  
  margin-bottom: ${({marginBottom}) => marginBottom}px;
`;

export const TextInfoList = styled.ul`
  font-weight: 400;
  font-size: 36px;
  list-style: inside;
`;

export const TextInfoListItem = styled.li`
  padding-left: 12px;
`;

export const PageIngo = styled.div`
  margin-bottom: 44px;
  
  font-size: 22px;
  text-align: center;
`;
