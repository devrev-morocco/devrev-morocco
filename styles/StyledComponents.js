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
  border-bottom: 8px solid #3c3c3c;
  animation: ${FadeInTr} 0.4s forwards;
  visibility: hidden;
`;

const ShowTriangle = css`
  display: block;
`;

export const MenuTriangle = styled(Triangle)`
  ${(props) => props.Enable && ShowTriangle}
`;

const BlockDis = css`
  display: block;
  visibility: visible;
`;

export const WLMenuTriangle = styled(Triangle)`
  border-bottom: 8px solid #32475f;
  ${(props) => props.Enable && BlockDis}
`;

export const TextOverflowHiddenCSS = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
