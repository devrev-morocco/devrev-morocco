/* eslint-disable no-irregular-whitespace */
import styled, { css } from 'styled-components';
import { DisFlex_AIC, DisFlex_AIC_JCC } from '../../../../styles';

const Menu_container = styled.div`
  position: fixed;
  top: 56px;
  background: #1a1a1a;
  z-index: 10;
  right: 0;
  left: 0;
  width: 100%;
  color: var(--nav-link-fg);
  height: 0%;
  overflow: hidden;
  max-height: none;
  padding: 0 50px;
  transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
    height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  @media screen and (max-width: 500px) {
    padding: 0 25px;
  }
`;

export const Mobile_Menu_container = styled(Menu_container)`
  ${(props) => {
    if (props.Show) {
      return css`
        height: 100%;
        visibility: visible;
        background: #000;
        border-top: 1px solid #333;
      `;
    }
  }}
`;

export const Menu_submenu_item = styled(DisFlex_AIC)`
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  width: auto;
  margin-bottom: 5px;
  height: 43px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--DropMenu-bgc);
  }

  &:first-child {
    margin-top: 10px;
  }
`;

export const Menu_submenu_Arrow = styled(DisFlex_AIC_JCC)`
  width: 35px;
  height: 30px;
  outline: none;

  &:hover {
    background-color: var(--hover-bgc);
    border-radius: var(--cart-radius);
  }
`;

export const Menu_submenu_Link = styled(DisFlex_AIC)`
  flex: 1;
  height: 100%;
  text-transform: capitalize;
  outline: none;

  ${Menu_submenu_item}:hover & {
    color: #fff;
  }

  body:not(.user-is-tabbing) &:focus {
    background-color: transparent !important;
  }

  &:focus {
    color: #fff;
    background-color: var(--hover-bgc);
  }
`;

export const Menu_submenu_DropDown = styled.div`
  overflow: hidden;
  max-height: none;
  height: 0%;
  transition: height 0.35s cubic-bezier(0.52, 0.16, 0.24, 1);

  ${(props) => {
    if (props.Show) {
      return css`
        visibility: visible;
      `;
    }
  }}
`;

export const Submenu_DropDown_wrap = styled.a`
  display: block;
  cursor: pointer;
  padding: 10px 0;
  text-transform: capitalize;
  margin-bottom: 5px;
  padding-left: 15px;
  border-radius: var(--cart-radius);
  outline: none;

  &:hover {
    color: var(--blue-primary-300);
    background-color: var(--hover-bgc);
  }

  &:focus {
    color: var(--blue-primary-300);
    background-color: var(--hover-bgc);
  }
`;
