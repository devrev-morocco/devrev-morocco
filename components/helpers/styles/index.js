import styled, { css } from 'styled-components';
import {
  AbsolutePosition,
  DisFlex,
  DisFlex_AIC_JCC,
  RelativePosition
} from '../../../styles';
import { GoogleRipple, LoadingBarProgress } from '../../../styles/keyframes';

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

export const LoadingBarContainer = styled.div`
  display: none;
  height: 3px;
  background: #27c4f5
    linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
  background-size: 200%;
  animation: ${LoadingBarProgress} 1.5s linear infinite;
  transform-origin: left;
  width: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 12;

  ${(props) =>
    props.Show &&
    css`
      display: block;
    `}
`;

// --------------

export const Switch = styled.label`
  width: 35px;
  height: 15px;
  border-radius: 50px;
  background: #444;
  position: relative;

  .switch__btn {
    height: 100%;
    display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    transition: transform 0.5s;
    transform: translateY(-3px);

    &::after {
      content: '';
      cursor: pointer;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: #909090;
      box-shadow: 0px 1px 4px #555;
      grid-column: 2;
      transition: background-color 0.5s;
      background-size: 100% 100%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false'%3E%3Cg%3E%3Cpath fill='%23292929' d='M8 5v14l11-7z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }

    ${(props) => {
      if (!props.autoPlay) {
        return css`
          &::after {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' focusable='false'%3E%3Cg%3E%3Cpath fill='%23111' d='M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
          }
        `;
      }
    }}
  }

  .on {
    transform: translate(6px, -10px);
    background-color: #90909050;
  }

  .off {
    transform: translate(-10px, -10px);
    background-color: #90909050;
  }
`;

export const Toggle = styled(AbsolutePosition)`
  opacity: 0;
  width: 0px;
  height: 0px;

  &:checked {
    + .switch__btn {
      grid-template-columns: 1fr 1fr 0fr;

      &::after {
        background-color: #3ea6ff;
      }
    }
  }
`;

export const Switch_circle = styled(DisFlex_AIC_JCC)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

// ------------- dropdown --------------

export const DD_Container = styled.div`
  cursor: pointer;
  position: relative;
`;

export const DD_wrapper = styled(DisFlex)`
  padding: 8px 5px;
  width: 110px;
  background-color: transparent;
  border: 1px solid #555;
  border-radius: 4px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: stretch;
`;

export const DD_Label = styled.div`
  flex: 1;
  text-align: center;
  align-self: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DD_Icon = styled(DisFlex_AIC_JCC)`
  flex: 0;
`;

export const DropItems_Container = styled(AbsolutePosition)`
  display: none;
  z-index: 15;
  left: 0;
  top: calc(100% + 2px);
  width: 110px;
  line-height: normal;
  transform-origin: 50% 0;
  letter-spacing: normal;
  cursor: default;
  border-radius: var(--cart-radius);
  background: var(--DropMenu-bgc);
  border: 1px solid var(--border-color);
  border-top: none;

  .dd-active {
    background-color: #6ce0f06b;
    pointer-events: none;
  }
`;

export const DropItem = styled.div`
  padding: 10px 5px;
  cursor: pointer;
  border-bottom: 1px solid #555;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: #222;
  }
`;
