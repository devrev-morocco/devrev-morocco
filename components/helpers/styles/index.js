import styled from 'styled-components';
import { AbsolutePosition, RelativePosition } from '../../../styles';
import { GoogleRipple } from '../../../styles/keyframes';

export const GoogleRippleEffect = styled(RelativePosition)`
  &:active,
  &:focus {
    outline: none;
  }
  overflow: hidden;
  padding: 0 15px;
  cursor: pointer;
`;
export const GoogleRippleEffect_wrapper = styled(AbsolutePosition)`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const GoogleRippleEffect_circle = styled.div.attrs((props) => {
  return {
    style: { top: `${props.y}px`, left: `${props.x}px` }
  };
})`
  position: absolute;
  border: 1px solid transparent;
  border-radius: 50%;
  pointer-events: none;
  animation: ${GoogleRipple} 0.4s;
  top: 0px;
  left: 0px;
  background: #ffffff86;
  transition: all 0.14s linear;
`;
