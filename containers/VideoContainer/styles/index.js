import styled, { css } from 'styled-components';
import {
  AbsolutePosition,
  DisFlex,
  DisFlex_AIC_JCC,
  RelativePosition
} from '../../../styles';

export const Video_Container = styled.div`
  padding-bottom: 8px;
`;

export const VideoWrapper = styled(DisFlex)`
  &:hover {
    background-color: #1e1e1e;
  }
`;

export const VideoThumbnailContainer = styled(RelativePosition)`
  cursor: pointer;
  margin-right: 8px;
  width: 160px;

  ${Video_Container}:hover & {
    box-shadow: 0px 0 6px 2px rgba(0, 0, 0, 0.3);
    /* transform:translateY(3px); */
  }

  @media screen and (max-width: 735px) {
    width: 140px !important;
  }

  .inner_btn--duration {
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 2px 4px;
    line-height: 0.9rem;
  }

  .inner_btn--clock {
    top: 0;
  }

  .icon_btn__check {
  }

  .switch__btn {
    height: 100%;
    display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    transition: transform 0.5s;
    transform: translateY(-3px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background-color: transparent;
    visibility: hidden;
    border-radius: 50%;
    z-index: 1;
    background-size: 100% 100%;
  }

  ${(props) => {
    if (props.isVid) {
      if (props.isPlaying) {
        return css`
          &::after {
            background-color: #ffffffd2;
            visibility: visible;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false'%3E%3Cg%3E%3Cpath fill='%23000' d='M8 5v14l11-7z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
          }
        `;
      } else {
        return css`
          &::after {
            background-color: #ffffffd2;
            visibility: visible;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' focusable='false'%3E%3Cg%3E%3Cpath fill='%23000' d='M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
          }
        `;
      }
    }
  }}
`;

export const VideoThumbnailWrapper = styled.div`
  margin-right: 8px;
  width: 160px;
  padding-bottom: 56%; // aspect ratio 16:9
  height: 0;
  overflow: hidden;
  background-color: #555;

  @media screen and (max-width: 735px) {
    width: 140px !important;
  }
`;

export const Inner_btn = styled(AbsolutePosition)`
  right: 0;
  margin: 2px;
  color: #fff;
  border-radius: 2px;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;

  ${VideoWrapper}:hover & {
    flex-direction: row-reverse;
    overflow: visible;
  }

  @media screen and (max-width: 735px) {
    font-size: 0.75rem;
  }

  .slider__check {
    color: #3ea6ff;
  }

  .slider__normal {
    white-space: nowrap;
  }
`;

export const Icon_btn = styled.div`
  background-color: #000;
  z-index: 2;
  padding: 1px;
  border-radius: 2px;
  height: 24px;
  width: 24px;

  ${VideoWrapper}:hover & {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const Slider = styled(DisFlex_AIC_JCC)`
  position: absolute;
  text-transform: uppercase;
  background-color: #000;
  transition: transform 0.35s ease-in-out;
  z-index: 0;
  padding: 5px 6px;
  border-radius: 2px 0 0 2px;
  font-size: 0.75em;
  color: #000;
  height: 24px;

  ${VideoWrapper}:hover & {
    transform: translateX(-23px);
    color: #fff;
  }
`;

export const VideoContainer_body = styled.div`
  width: 100%;
  min-width: 0;
`;

export const VideoContainer_Body_wrap = styled(DisFlex)`
  min-width: 0;
  width: 100%;
  padding-right: 10px;
  box-sizing: border-box;
  flex-direction: column;
`;

export const VideoContainer_body_Title = styled.div`
  font-size: 0.91rem;
  cursor: pointer;
  margin: 0 0 4px 0;
  max-height: 3.2rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #fafafa;
  padding: 2px;

  @media screen and (max-width: 1050px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 735px) {
    font-size: 0.9rem;
  }
`;

export const VideoContainer_body_Details = styled.div`
  display: block;
  max-width: 100%;
  padding-top: 1px;
  font-size: 0.75rem;
  color: var(--Duration-Color);
  color: #aaa;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  @media screen and (max-width: 1050px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 735px) {
    font-size: 0.75rem;
  }
`;
