import styled, { keyframes } from 'styled-components';

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
`;

export const ModalWrapper = styled.div`
  position: absolute;

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
`;

export const Modal = styled.div`
  padding: 16px 32px;
  
  background: #ffffff;

  color: #0d0d0d;
`;

