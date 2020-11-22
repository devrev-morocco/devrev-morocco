import styled, { css } from 'styled-components';
import {
  AbsolutePosition,
  DisFlex_AIC,
  DisNone,
  RelativePosition
} from '../../../styles';
import {
  RDash,
  Opacity0to1,
  PopUpTransition450,
  PopUpTransition400,
  PopUpTransition90vw
} from '../../../styles/keyframes';
import { TextOverflowHiddenCSS } from '../../../styles/StyledComponents';

export const InfoHeaderContainer = styled(RelativePosition)`
  padding: 12px 10px 10px 10px;
  padding-bottom: 10px;
  background-color: #272829;
  border-bottom: 1px solid #363636;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

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
  font-size: 0.9em;
  color: #ebebeb;

  .vertical-line {
    height: 25px;
    width: 2px;
    margin: 0 16px;
    background: #5a5a5a;

    @media screen and (max-width: 735px) {
      width: 1px;
      margin: 0 10px;
    }
  }

  @media screen and (max-width: 1150px) {
    font-size: 0.95em;
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

const InfoDrop = styled(RelativePosition)`
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

export const ParticipantsContainer = styled(DisFlex_AIC)`
  position: relative;
  flex-flow: row wrap;
  padding: 5px 0;
  margin-top: 5px;
  border-top: 1px solid #383838;
  border-bottom: 1px solid #383838;
  height: 55px;
`;

export const ParticipantContainer = styled(RelativePosition)`
  height: 40px;

  ${(props) => {
    if (props.SetMargin) {
      return css`
        left: ${props.Index * 60}px;
      `;
    }
  }}
`;

export const ParticipantWrapper = styled(AbsolutePosition)`
  cursor: pointer;
  color: #fff;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transition: all 200ms cubic-bezier(0.2, 0.965, 0, 1.005);
  transform: translateY(-50%);
  will-change: transform, opacity;
  /* it's a bad practice to animate using top, left */
  top: 50%;
  left: 50%;

  ${(props) => {
    if (props.ShowMore) {
      return css`
        display: flex;
        justify-content: center;
        cursor: default;
        position: fixed;
        height: auto;
        box-shadow: 0 25px 35px 0 rgba(0, 0, 0, 0.4);
        z-index: 999;
        animation: ${PopUpTransition450} 200ms forwards;
        border-radius: 5px;
        background-image: linear-gradient(#222, #222),
          linear-gradient(
            90deg,
            #ec6192,
            #ec4c34,
            #ffbd2b,
            #ebde56,
            #57c754,
            #53a1eb
          );
        padding: 2px;
        background-clip: content-box, border-box;

        @media screen and (max-width: 735px) {
          transition: all 400ms cubic-bezier(0.2, 0.965, 0, 1.005);
          animation: ${PopUpTransition400} 150ms forwards;
          padding: 1px;
        }

        @media screen and (max-width: 600px) {
          animation: ${PopUpTransition90vw} 100ms forwards;
        }
      `;
    }
  }}
`;

export const ParticipantThumbnail = styled(RelativePosition)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #444;
  box-sizing: border-box;

  img {
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    z-index: 2;
    display: none;
    text-align: center;
    padding: 8px;
    font-size: 0.8em;
    border-radius: var(--cart-radius);
    top: 50px;
    left: 0;
    width: auto;
    content: attr(data-content);
    background: var(--DropMenu-bgc);
    ${TextOverflowHiddenCSS}
  }

  &:hover::after {
    display: inline-block;
  }

  &::before {
    position: absolute;
    content: '';
    height: 41px;
    width: 41px;
    top: -1.5px;
    left: -1.5px;
    border: 1px dashed #fff;
    animation: ${RDash} 10s infinite linear;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
    border-image: linear-gradient(
      to right,
      #27c4f5,
      #a307ba,
      #fd8d32,
      #70c050,
      #27c4f5
    );
    border-radius: 50%;
  }

  ${(props) => {
    if (props.ShowMore) {
      return css`
        display: none;
      `;
    }
  }}

  ${(props) => {
    switch (props.DeferIndex) {
      case 0:
        return css`
          &::before {
            border-image: linear-gradient(to right, #70c050, #27c4f5);
          }
        `;
      case 1:
        return css`
          &::before {
            border-image: linear-gradient(to right, #fafafa, #ff4b14);
          }
        `;
      case 2:
        return css`
          &::before {
            border-image: linear-gradient(to right, #fd6132, #ff0000);
          }
        `;
      case 3:
        return css`
          &::before {
            border-image: linear-gradient(to right, #27c4f5, #0000ff);
          }
        `;
      default:
        return css`
          &::before {
            border-image: linear-gradient(
              to right,
              #27c4f5,
              #a307ba,
              #fd8d32,
              #70c050,
              #27c4f5
            );
          }
        `;
    }
  }}
`;

export const ParticipantDetails = styled(DisNone)`
  position: relative;
  flex-direction: column;
  align-items: center;

  ${(props) => {
    if (props.ShowMore) {
      return css`
        display: flex;
      `;
    }
  }}
`;

export const ParticipantDetailsThumbnailContainer = styled(DisFlex_AIC)`
  flex-direction: column;
  height: 100px;
  border-bottom: 1px solid #4b4b4b;
`;

export const ParticipantDetailsThumbnail = styled(RelativePosition)`
  border-radius: 50%;
  height: 110px;
  width: 110px;
  background-color: #444;
  top: -55px;
  box-shadow: 0 0 5px 3px green;

  img {
    border-radius: 50%;
  }

  &::before {
    position: absolute;
    content: '';
    height: 111px;
    width: 111px;
    top: -2.45px;
    left: -2.45px;
    border: 2px dashed #add8e6;
    border-radius: 50%;
    animation: ${RDash} 20s infinite linear;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const ParticipantDetailsName = styled(RelativePosition)`
  white-space: nowrap;
  top: -40px;
  font-weight: bold;
`;

export const ParticipantDetailsAbout = styled.div`
  text-align: center;
  text-overflow: wrap;
  padding: 0 20px;
  color: #ebebeb;
  animation: ${Opacity0to1} 200ms 1;
  margin-bottom: 45px;
  margin-top: 10px;
  line-height: 1.08em;

  @media screen and (max-width: 735px) {
    font-size: 0.88em;
    padding: 0 10px;
    line-height: 1em;
  }
`;

export const ParticipantDetailsLinkedIn = styled(AbsolutePosition)`
  bottom: 10px;
  right: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.4);
`;
export const ParticipantDetailsX = styled(AbsolutePosition)`
  top: 15px;
  right: 5px;
  cursor: pointer;
`;
