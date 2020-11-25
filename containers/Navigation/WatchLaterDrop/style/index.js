import styled, { css } from 'styled-components';
import {
  AbsolutePosition,
  DisFlex_AIC,
  DisFlex_AIC_JCC,
  RelativePosition
} from '../../../../styles';

const Cart_Container = styled(AbsolutePosition)`
  display: none;
  top: 56px;
  background: #fff;
  border-radius: var(--cart-radius);
  background: var(--DropMenu-bgc);
  border: 1px solid var(--border-color);
  border-top: none;
  padding-bottom: 2px;
  box-sizing: border-box;
  right: 0;
  width: 450px;
  color: #4c4c4c;
  z-index: 999;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 0px 15px 5px rgba(0, 0, 0, 0.15);
  }
`;

const SRcAX = css`
  position: fixed;
  top: 56px;
  right: 0;
  left: 0;
  bottom: 0;
  margin-top: 0;
  width: 100%;
  border: 0;
  border-radius: 0;
`;

export const WLCart_Container = styled(Cart_Container)`
  ${(props) => props.isMobileMode && SRcAX}
`;

export const WLCartContainerWrap = styled(RelativePosition)`
  z-index: 1;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-height: 300px;

  ${(props) => {
    if (props.isMobileMode && !props.isMobile) {
      return css`
        max-height: calc(100vh - (56px + 40px)) !important;
      `;
    } else if (props.isMobileMode && props.isMobile) {
      return css`
        max-height: calc(100% - 40px) !important;
      `;
    }
  }}
`;

export const WLCartHeader = styled(DisFlex_AIC)`
  box-sizing: border-box;
  position: relative;
  padding: 5px 5px;
  border-bottom: 1px solid #4d4d4d;
  font-weight: bold;
  height: 40px;
  background-color: #32475f;

  .wl-tt {
    color: var(--fg-color);
    font-size: 0.9em;
  }

  .wl-ss {
    color: #999;
    font-size: 0.77em;
  }

  .wl_line {
    margin: 0 8px;
    height: 20px;
    width: 1px;
    background-color: #8a8f98;
  }

  @media screen and (max-width: 635px) {
    font-size: 0.88em;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.82em;
  }

  @media screen and (max-width: 300px) {
    padding: 0px 8px;
  }
`;

export const WlContentContainer = styled(RelativePosition)`
  box-sizing: border-box;
  overflow: hidden;
  height: auto;
  outline: none;
  cursor: pointer;
`;

export const WLMinDescription = styled.div`
  color: #666;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  font-size: 0.7em;
  padding-bottom: 1px;
`;

export const WLRemoveBtn = styled.div`
  font-size: 0.7em;
  cursor: pointer;
  color: #999;
  white-space: nowrap;
  width: fit-content;

  ${WlContentContainer}:hover &, ${WlContentContainer}:focus &, &:active:focus {
    text-decoration: underline;
    color: #50cdff;
    transform: none;
    box-shadow: none;
  }

  body:not(.user-is-tabbing) &:focus {
    outline: none;
  }

  &:focus {
    text-decoration: underline;
    color: tomato;
    transform: none;
    box-shadow: none;
  }
`;

export const WlNoResultsContainer = styled(RelativePosition)`
  overflow: hidden;
  height: 200px;
`;

export const WlNoResultsWrapper = styled(DisFlex_AIC_JCC)`
  color: gray;
  width: fit-content;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: fit-content;
`;

export const WlNoResultsHeader = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  color: #999;
`;
