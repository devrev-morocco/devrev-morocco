import styled, { css } from 'styled-components';
import {
  AbsolutePosition,
  RelativePosition,
  DisFlex,
  DisFlex_AIC,
  DisNone
} from '../';

export const Overlay = styled(DisNone)`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
  transition: all 600ms cubic-bezier(0.2, 0.965, 0, 1.005);

  ${(props) =>
    props.Show &&
    css`
      display: block;
    `}
`;

export const MainContainer = styled(DisFlex)`
  padding-top: 24px;
  margin: auto;
  flex-flow: row nowrap;
  justify-content: stretch;
  height: calc(100vh - 56px);
  width: 100%;

  @media screen and (max-width: 1150px) {
    flex-flow: column nowrap;
    max-width: 90vw;
    height: 100%;
  }

  @media screen and (max-width: 735px) {
    padding-top: 0;
    max-width: 100vw;
  }
`;

export const VideoPlayerContainer = styled(RelativePosition)`
  padding-bottom: 56.25%; // aspect ratio 16:9 => (100%*9)/16
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-sizing: border-box;

  @media screen and (max-width: 735px) {
    border-radius: 0;
  }
`;

export const VideoPlayerWrapper = styled(AbsolutePosition)`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #000;

  & > div {
    height: 100%;
    width: 100%;
    transition: opacity 0.5s;

    ${(props) => {
      if (props.Visible)
        return css`
          opacity: 1;
        `;
      else
        return css`
          opacity: 0;
        `;
    }}
  }
`;

export const PrimaryContainer = styled(DisFlex)`
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0 24px !important;
  flex: 2 1;

  @media screen and (max-width: 1150px) {
    margin: 0 !important;
  }
`;

export const Title = styled(DisFlex_AIC)`
  color: var(--fg-color);
  font-size: 1.2em;
  padding: 20px 0 5px 0;

  .ep-tag {
    font-size: 1.15em;
    white-space: nowrap;
    font-weight: bold;
  }

  .title-vertical-line {
    height: 32px;
    width: 2px;
    margin: 0 16px;
    background: #5a5a5a;
  }

  .ep-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    padding: 3px 0;
  }

  @media screen and (max-width: 735px) {
    padding: 15px 10px;
    padding-bottom: 5px;
    margin-bottom: 0;
    font-size: 0.8em;

    .ep-tag {
      font-size: 0.9em;
    }

    .vertical-line {
      width: 1px;
      height: 25px;
      margin: 0 10px;
      background: #5a5a5a;
    }
  }

  @media screen and (max-width: 935px) {
    font-size: 1em;
  }

  @media screen and (max-width: 1150px) {
    border: 0;
  }
`;

export const PublishedAtContainer = styled.div`
  color: #888;
  font-weight: bold;
  font-size: 0.8em;
  padding-bottom: 15px;

  @media screen and (max-width: 735px) {
    font-size: 0.7em;
    padding: 0px 0 10px 10px;
  }
`;

export const SecondaryContainer = styled(DisFlex)`
  flex: 1 1;
  margin-right: 24px;
  margin-bottom: 10px;
  width: 500px;
  max-width: 500px;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 8px 8px 2px 2px;
  background-color: #242526;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1150px) {
    min-width: 100% !important;
    margin-right: 0;
    width: 100%;
  }

  @media screen and (max-width: 735px) {
    border-radius: 0;
    border: 0;
  }
`;

export const SecondaryWrapper = styled.div`
  padding: 5px 0 2px 10px;
  overflow: hidden;

  @media screen and (max-width: 735px) {
    padding-top: 10px;
  }
`;
