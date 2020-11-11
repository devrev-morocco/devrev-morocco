import styled, { css } from 'styled-components';
import { DisFlex_AIC, DisFlex_AIC_JCC } from '../../../styles';
import { ScaleOut } from '../../../styles/keyframes';

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
      rgba(26, 26, 26, 0.9);
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
  border-radius: 50%;
  background-color: #fff; // logo need fix text is transparent
  box-sizing: border-box;

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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

export const MenuBurgerContainer = styled.div`
  display: none;
  margin-left: 20px;
  cursor: pointer;
  animation: ${ScaleOut} var(--Nav-animation-duration) forwards;

  body:not(.user-is-tabbing) &:focus {
    outline: none;
  }

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
`;

export const BurgerTxt = styled.div`
  color: #e9e9e9;
  font-size: 0.64em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: auto;
  cursor: pointer;
`;

export const RightContainer = styled(DisFlex_AIC)`
  position: relative;
  box-sizing: border-box;
  padding-top: 3px;
  height: 100%;
`;
