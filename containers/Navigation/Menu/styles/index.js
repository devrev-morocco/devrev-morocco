import styled, { css } from 'styled-components';
import {
  DisFlex_AIC,
  DisFlex_AIC_JCC,
  AbsolutePosition,
  RelativePosition,
  DisFlex,
  TextOverflowHidden
} from '../../../../styles';
import { ScaleIn, ScaleOut } from '../../../../styles/keyframes';

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

  ${(props) =>
    props.Disable &&
    css`
      cursor: default;
    `}

  &:hover .disabled {
    color: #555 !important;
    background: #333 !important;
  }

  .disabled {
    pointer-events: none;
    color: #555;
  }
`;

export const MenuItemLink = styled(TextOverflowHidden)`
  padding: 6px 15px 6px 8px;
  margin: 0 8px;
  border-radius: var(--cart-radius);
  font-size: 0.95rem;
  color: var(--menu-fg-color);
  text-decoration: none;
  width: 100%;

  ${MenuItem}:hover & {
    color: var(--fg-hover-color);
    background: var(--hover-bgc);
  }
`;

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
  outline: none;

  ${NavLinkContainer}:hover & {
    color: var(--fg-hover-color) !important;
  }
`;

export const LinkIcon = styled(DisFlex_AIC_JCC)`
  flex: 0;
  cursor: pointer;
`;
