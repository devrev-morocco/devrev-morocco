import styled, { css } from 'styled-components';
import { DisFlex_AIC, DisFlex_AIC_JCC, DisFlex_JCC } from '../../../styles';

export const Mini_Footer = styled(DisFlex_JCC)`
  margin: 0 auto;
  width: 100%;
  font-size: 12px;
  color: #8a8f98;
  z-index: 2;
`;

export const Mini_Footer_wrapper = styled(DisFlex_AIC)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;

  @media screen and (max-width: 735px) {
    padding: 5px;
    flex-direction: column;
  }
`;

export const Mini_Footer_info = styled(DisFlex_AIC_JCC)`
  text-align: center;
  color: #8a8f98;
  white-space: nowrap;

  ${(props) =>
    props.isLink &&
    css`
      cursor: pointer;
      &:hover {
        color: var(--fg-color);
      }
    `}

  @media screen and (max-width: 735px) {
    font-size: 0.9em;
  }
`;

export const Mini_Footer_Separator = styled.div`
  margin: 0 10px;
  height: 16px;
  width: 1px;
  background: #8a8f98;

  @media screen and (max-width: 735px) {
    margin: 0 5px;
    height: 12px;
  }
`;
