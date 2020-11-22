import styled, { css } from 'styled-components';
import {
  AbsolutePosition,
  DisFlex_AIC,
  DisFlex_AIC_JCC,
  DisNone
} from '../../../styles';
import { ScaleOut, WlCounterPulse } from '../../../styles/keyframes';
import { TextOverflowHiddenCSS } from '../../../styles/StyledComponents';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 60;
  height: 56px;
  width: 100%;
  color: #ccc;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  @media screen and (max-width: 735px) {
    padding: 0 2%;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 56px;
    transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1);
    background: url('/static/images/nav-bg.webp') repeat-x top center
      rgba(35, 35, 35, 0.9);
    z-index: -1;

    @media screen and (max-width: 735px) {
      background-color: #1a1a1a;
    }
  }

  ${(props) => {
    if (props.menuIsOpen) {
      return css`
        &::before {
          background: url('/static/images/nav-bg.webp') repeat-x top center #000;
        }
      `;
    }
  }}
`;

export const NavContainer = styled(DisFlex_AIC)`
  box-sizing: border-box;
  position: relative;
  padding-top: 3px;
  height: 56px;
  margin: 0 24px;

  @media screen and (max-width: 735px) {
    max-width: 100% !important;
  }

  @media screen and (max-width: 1050px) {
    max-width: 90vw;
    margin: auto;
  }
`;

export const NavLogo = styled(DisFlex_AIC_JCC)`
  z-index: 1;
  margin-right: 30px;
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 50%;

  &::before {
    position: absolute;
    z-index: 2;
    display: none;
    text-align: center;
    padding: 8px;
    font-size: 0.92em;
    border-radius: var(--cart-radius);
    top: 60px;
    left: 0;
    width: 60px;
    content: attr(data-content);
    background: var(--DropMenu-bgc);
    ${TextOverflowHiddenCSS}
  }

  &:hover::before {
    display: inline-block;
  }

  @media screen and (max-width: 735px) {
    font-size: 1.2em;

    &::before {
      padding: 5px;
      font-size: 0.8em;
    }
  }

  & > a {
    width: 100%;
    height: 100%;
  }
`;

export const MenuContainer = styled(DisFlex_AIC)`
  flex: 1;
`;

export const MenuMainPlaceholder = styled(DisFlex_AIC_JCC)`
  & > div {
    background-color: #333;
    width: 70px;
    height: 11px;
    margin: 0 15px;
    border-radius: var(--cart-radius);

    @media screen and (max-width: 735px) {
      display: none;
    }
  }
`;

export const MenuBurgerContainer = styled(DisNone)`
  margin-left: 20px;
  cursor: pointer;
  animation: ${ScaleOut} var(--Nav-animation-duration) forwards;

  @media screen and (max-width: 735px) {
    display: flex;
    align-items: center;
  }
`;

export const Burger = styled(DisFlex_AIC_JCC)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  padding-bottom: 1px;
  outline: none;
`;

export const BurgerTxt = styled.div`
  color: #e9e9e9;
  font-size: 0.64em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: auto;
  cursor: pointer;

  body:not(.user-is-tabbing) &:focus {
    outline: none;
  }
`;

export const RightContainer = styled(DisFlex_AIC)`
  position: relative;
  box-sizing: border-box;
  padding-top: 3px;
  height: 100%;
`;

export const WatchLaterContainer = styled(DisFlex_AIC_JCC)`
  position: relative;
  cursor: pointer;
  height: 100%;

  body:not(.user-is-tabbing) &:focus {
    outline: none;
  }
`;

export const ClockIconContainer = styled.div`
  cursor: pointer;
  width: 30px;

  & > svg > path {
    fill: #fafafa;
  }

  &:hover > svg > path {
    fill: #fff;
  }
`;

const CounterContainer = styled(AbsolutePosition)`
  font-size: 0.7em;
  font-weight: bold;
  padding: 0px 3px;
  border-radius: 2px;
  top: 3px;
  right: -6px;
  color: #fff;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -35px 0 0 -35px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 35px #6ebbfd;
  }
`;

export const WLCounter = styled(CounterContainer)`
  ${(props) =>
    props.Trigger &&
    css`
      &::before {
        animation: ${WlCounterPulse} var(--Wl-pulse-animation-duration) ease-out
          forwards;
      }
    `}
`;
