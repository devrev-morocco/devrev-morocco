import styled, { css } from 'styled-components';
import { AbsolutePosition } from './index';
import { FadeInTr } from './keyframes';

export const Triangle = styled(AbsolutePosition)`
  display: none;
  top: auto;
  bottom: 0;
  right: 14.5px;
  left: auto;
  z-index: 3;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--DropMenu-bgc);
  animation: ${FadeInTr} 0.4s forwards;
  visibility: hidden;
`;

const ShowTriangle = css`
  display: block;
`;

export const MenuTriangle = styled(Triangle)`
  ${(props) => props.Enable && ShowTriangle}
`;
