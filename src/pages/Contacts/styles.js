import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 74px;
  margin-bottom: 36px;
  
  font-weight: 700;
  font-size: 54px;
  text-align: center;
`;

export const Info = styled.div`
  display: flex;

  margin: 0 120px 32px;
`;

export const LeftBlock = styled.div`
  width: 548px;
`;

export const ContactPhotoWrapper = styled.div`
  width: 100%;
  
  margin-bottom: 52px;
`;

export const Text = styled.div`
  padding-left: 22px;
`;

export const TextInfo = styled.p`
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  font-weight: ${({ fontWeight }) => fontWeight};

  font-size: 22px;
  line-height: 32px;
`;

export const Link = styled.a`
  display: block;

  margin-bottom: ${({ marginBottom }) => marginBottom}px;

  text-decoration: none;
  font-size: 22px;
  line-height: 32px;
  color: #0765D3;
`;

export const Divider = styled.div`
  width: 494px;
  height: 8px;

  margin-bottom: 24px;
  
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`;

export const ContactUsButton = styled.button`
  padding: 26px 141px;

  background: #E68700;
  border: 1px solid #777777;
  border-radius: 25px;
  outline: 0;
  
  color: #ffffff;
  font-size: 28px;
  line-height: 38px;

  cursor: pointer;
  
  transition: .2s;

  &:hover {
    background: #bb6f01;
  }
`;

export const RightBlock = styled.div`
  
`;

