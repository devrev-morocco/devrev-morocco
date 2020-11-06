import styled, { keyframes } from 'styled-components';
import { AbsolutePosition, Visible } from './index';

// <---------- Triangle ---------->

const FadeInTr = keyframes`
0% {
     transform: translateY(20px);
     opacity: 0;
   }

100% {
    transform: translateY(0px);
    opacity: 1;
    }
`;

export const Triangle = styled(AbsolutePosition)`
  display: none;
  top: auto;
  bottom: 0;
  right: 14.5px;
  left: auto;
  z-index: 3;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ffffff;
  animation: ${FadeInTr} 0.4s forwards;
  visibility: hidden;
`;

export const MenuTriangle = styled(Triangle)`
  ${(props) => props.Enable && Visible}
`;
