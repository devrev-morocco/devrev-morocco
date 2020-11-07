import styled, { css } from 'styled-components';
import {
  DisFlex_AIC,
  DisFlex_AIC_JCC,
  DisFlex_JCC,
  AbsolutePosition,
  RelativePosition,
  DisNone,
  DisFlex
} from '../../../../styles';
import { ScaleIn, ScaleOut, SectionMove } from '../../../../styles/keyframes';

const Menu = styled(DisFlex_AIC)`
  visibility: visible;
  opacity: 1;
  transition-duration: 200ms;
  transition-property: opacity, visibility;
  transition-delay: 0;
  animation: ${ScaleOut} var(--Nav-animation-duration) forwards;
  will-change: transform, opacity;

  @media screen and (max-width: 735px) {
    display: none;
  }
`;

export const MainMenu = styled(Menu)`
  ${(props) =>
    props.searchIsActive &&
    css`
      transition-duration: 200ms;
      transition-delay: 0;
      transition-property: opacity, visibility;
      animation: ${ScaleIn} var(--Nav-animation-duration) forwards;
      width: 0px;
      height: 0px;
      opacity: 0;
      visibility: hidden;
    `}
`;

// ------------- submenu ---------------

export const MenuContainer = styled(AbsolutePosition)`
  display: none;
  z-index: 5;
  left: 1px;
  top: 52px;
  width: 230px;
  padding: 8px 0;
  font-size: 13px;
  line-height: normal;
  transform-origin: 50% 0;
  letter-spacing: normal;
  cursor: default;
  border-radius: var(--cart-radius);
  background: var(--DropMenu-bgc);
  background: rgba(49, 49, 49, 0.8); // later
  border: 1px solid var(--border-color);
  border-top: none;

  @media screen and (max-width: 1100px) {
    left: -63px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    border-radius: var(--cart-radius);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 2px 15px 5px rgba(0, 0, 0, 0.15);
  }
`;

export const MenuItem = styled(DisFlex_AIC)`
  cursor: pointer;
`;

export const MenuItemLink = styled.a`
  padding: 6px 15px 6px 8px;
  margin: 0 8px;
  border-radius: var(--cart-radius);
  font-size: 0.95rem;
  color: var(--menu-fg-color);
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;

  ${MenuItem}:hover & {
    color: var(--fg-hover-color);
    background: var(--hover-bgc);
  }
`;
export const SubMenuSvg = styled(AbsolutePosition)`
  right: 8px;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  & > svg > g > g {
    fill: transparent;
  }
`;

const LayerContainer = styled(DisFlex_JCC)`
  flex-direction: column;
  position: absolute;
  z-index: auto;
  left: 100%;
  top: 0;
  width: 616px;
  height: 100%;
  min-height: 469px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--cart-radius);
  transition: all 0.3s ease-in-out;
  /* animation: ${SectionMove} 300ms forwards; */
  box-shadow: 5px 1px 15px 0px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 1000px) {
    width: 450px;
  }

  border-top-left-radius: 0;
`;

export const SectionLayerContainer = styled(LayerContainer)`
  ${(props) => !props.showMore && DisNone}
`;

export const CategoryContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0 48px;
  padding-bottom: 10px;
  font-weight: 400;
  vertical-align: middle;
  transition: background-image 0.8s ease-in-out;
  box-sizing: border-box;
`;

export const CategoryTitle = styled.p`
  margin-top: 0;
  margin-bottom: 17px;
  font-size: 1.25em;
  text-transform: uppercase;
  color: #000000cc;
  font-weight: bold;
`;

export const CategoryProducts = styled(DisFlex)`
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const CategoryCart = styled.a`
  position: relative;
  height: 160px;
  width: 160px;
  border: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  box-sizing: border-box;
  border-radius: var(--cart-radius);

  @media screen and (min-width: 1000px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      margin-bottom: 16px;
    }
  }

  @media screen and (max-width: 1000px) {
    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 16px;
    }
  }
`;

export const CategoryCartInner = styled(RelativePosition)`
  overflow: hidden;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  box-sizing: border-box;

  /* placeholder image */
  &::before {
    display: block;
    content: '';
    z-index: -1;
    width: 100%;
    padding-top: 100%;
  }
`;

export const CategoryCartImgWrap = styled(AbsolutePosition)`
  top: 0;
  right: 0;
  overflow: hidden;
  left: 0;
`;

export const CategoryCartDetails = styled(AbsolutePosition)`
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e1e1e1;
  color: #222;
  text-align: center;
  z-index: 5;
`;

export const CategoryCartDetails_title = styled.div`
  padding: 5px;
  width: 100%;
  height: 2em;
  font-size: 1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
  transition: background-color 400ms, color 400ms;

  ${CategoryCart}:hover & {
    color: #f1f1f1;
    background: #232526;
    background: linear-gradient(to left, #414345, #232526);
    text-shadow: 1px 1px rgba(255, 255, 255, 0.1);
  }
`;

export const CartSpinner = styled(DisFlex_AIC_JCC)`
  position: absolute;
  width: 100%;
  height: 160px;
  top: 0;
  right: 0;
  left: 0;
  background-color: #dedede1a;
`;

// <------- MenuLink ------->

export const NavLinkContainer = styled(RelativePosition)`
  font-size: 0.87em;
  font-weight: bold;
  line-height: 52px;
  cursor: pointer;
  color: var(--nav-link-fg);

  &:hover > :nth-child(2) {
    visibility: visible;
  }
`;

export const LinkNav = styled(DisFlex)`
  align-items: stretch;
`;

export const LinkSpan = styled(RelativePosition)`
  flex: 1;
  font-weight: bold;
  padding-right: 3px;
  cursor: pointer;
  text-transform: uppercase;
  color: inherit;
  letter-spacing: 0.25px;

  ${NavLinkContainer}:hover & {
    color: var(--fg-hover-color) !important;
  }
`;

export const LinkIcon = styled(DisFlex_AIC_JCC)`
  flex: 0;
  cursor: pointer;
`;
