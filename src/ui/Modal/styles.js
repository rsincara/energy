import styled, { keyframes } from 'styled-components';

import modalBackground from '../../static/modal-background.jpg';

const appearAnimation = keyframes`
  from {
    filter: opacity(0);
  }

  to {
    filter: opacity(1);
  }
`

export const Overlay = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background: #000000;
  opacity: 0.5;

  transition: .5s;
  animation-name: ${appearAnimation};
  animation-duration: .5s;
  
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: fixed;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  width: fit-content;
  height: fit-content;

  margin: auto;
  
  transition: .5s;
  animation-name: ${appearAnimation};
  animation-duration: .5s;
  
  z-index: 999;
`;

export const Background = styled.div`
  position: absolute;
  background-image: url(${modalBackground});
  background-size: cover;
  width: 100%;
  height: 100%;
  
  filter: contrast(.3) brightness(1.3);
`;

export const Modal = styled.div`
  position: relative;
  padding: 40px 32px 30px;

  color: #000000;
`;

