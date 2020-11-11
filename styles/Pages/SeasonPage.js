import styled, { css } from 'styled-components';
import { AbsolutePosition, RelativePosition, DisFlex, DisFlex_AIC } from '../';

export const MainContainer = styled(DisFlex)`
  padding-top: 24px;
  margin: auto;
  flex-flow: row nowrap;
  justify-content: stretch;
  height: calc(100vh - 56px);
  width: 100%;

  @media screen and (max-width: 1050px) {
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
  padding-bottom: 56.25%; // aspect ratio 16:9
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
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0 24px !important;
  flex: 2 1;

  @media screen and (max-width: 1050px) {
    margin: 0 !important;
  }
`;

export const Title = styled(DisFlex_AIC)`
  color: var(--fg-color);
  font-size: 1.2em;
  padding: 20px 0;

  .ep-num {
    font-size: 1.15em;
    white-space: nowrap;
    font-weight: bold;
  }

  .vertical-line {
    height: 32px;
    width: 2px;
    margin: 0 16px;
    background: #5a5a5a;
  }

  .ac-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    padding: 3px 0;
  }

  @media screen and (max-width: 735px) {
    padding: 15px 10px;
    padding-bottom: 25px;
    margin-bottom: 0;
    font-size: 0.8em;

    .ep-num {
      font-size: 0.9em;
    }

    .vertical-line {
      width: 1px;
      margin: 0 10px;
      background: #5a5a5a;
    }
  }

  @media screen and (max-width: 935px) {
    font-size: 1em;
  }

  @media screen and (max-width: 1050px) {
    border: 0;
  }
`;

const InfoDrop = styled.div`
  position: relative;
  color: #e1e1e1;
  overflow: hidden;
  display: none;
  padding: 5px 0;
`;

export const InfoDrop_container = styled(InfoDrop)`
  ${(props) => {
    if (props.Show) {
      return css`
        visibility: visible;
        display: block !important;
      `;
    }
  }}
`;

export const InfoDrop_line = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.2em;
  font-size: 0.9em;

  &:first-child {
    line-height: 1em;
  }
`;
export const InfoDrop_space = styled.div`
  padding: 5px 0;
  height: 5px;
  width: 100%;
`;

export const SecondaryContainer = styled(DisFlex)`
  flex: 1 1;
  margin-right: 24px;
  margin-bottom: 24px;
  width: 402px;
  width: 500px;
  min-width: 370px;
  max-width: 500px;
  flex-direction: column;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #242526;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1050px) {
    min-width: 100% !important;
    margin-right: 0;
    width: 100%;
  }

  @media screen and (max-width: 735px) {
    border-radius: 0;
    border: 0;
  }
`;

export const InfoHeaderContainer = styled.div`
  padding: 12px 10px 10px 10px;
  padding-bottom: 10px;
  background-color: #272829;
  border-bottom: 1px solid #363636;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;

  @media screen and (max-width: 735px) {
    border-radius: 0;
    border-top: 1px solid #363636;
  }
`;

export const VidTitleContainer = styled(DisFlex_AIC)`
  justify-content: space-between;
  padding-right: 5px;
`;

export const VidState = styled(DisFlex_AIC)`
  font-size: 1em;
  color: #fafafa;
  color: #ebebeb;

  .forward-slash-line {
    height: 25px;
    width: 2px;
    margin: 0 16px;
    background: #5a5a5a;

    @media screen and (max-width: 735px) {
      width: 1px;
      margin: 0 10px;
    }
  }

  @media screen and (max-width: 735px) {
    font-size: 0.9em;
  }
`;

export const AutoPlayContainer = styled(DisFlex_AIC)`
  & > span {
    font-size: 0.7em;
    font-weight: bold;
    color: #aaa;
    margin-right: 8px;
    text-transform: uppercase;
  }
`;

export const VidDetailsContainer = styled.div`
  padding-top: 8px;
  margin-right: 8px;
`;

export const VidDisc = styled.div`
  color: #ccc;
  font-size: 0.9em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  padding: 2px 0;
  line-height: 1.05em;
`;

export const VidDisc_show_more = styled.div`
  color: #aaa;
  font-size: 0.8em;
  padding: 5px 0;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: underline;

  &:hover {
    color: #6fa0eb;
  }
`;

// -----------------------------------

export const SecondaryWrapper = styled.div`
  padding-top: 8px;
  padding-left: 10px;
  overflow: hidden;
`;
