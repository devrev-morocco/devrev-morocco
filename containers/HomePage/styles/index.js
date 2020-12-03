import styled, { css } from 'styled-components';
import {
  DisFlex_AIC,
  RelativePosition,
  DisFlex,
  DisFlex_AIC_JCC
} from '../../../styles';
import { RDash } from '../../../styles/keyframes';

export const HeroContainer = styled(DisFlex_AIC)`
  justify-content: space-between;
  margin-top: calc(56px + 35px);
  font-size: 1rem;

  @media screen and (max-width: 1290px) {
    margin: calc(56px + 35px) 50px 0 50px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }

  @media screen and (max-width: 735px) {
    font-size: 0.73rem;
    margin: calc(56px + 35px) 10px 0 10px;
  }
`;

export const DescriptionContainer = styled(DisFlex)`
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1050px) {
    align-items: center;
  }
`;

export const H1 = styled.h1`
  font-size: 2.2em;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0.77em;
  text-transform: uppercase;
  background: linear-gradient(
    to right,
    #27c4f5,
    #e462f8,
    #fd8d32,
    #70c050,
    #27c4f5
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const H2 = styled.h2`
  color: #ccc;
  font-weight: bold;
  font-size: 1.35em;
  line-height: 1.2em;

  @media screen and (max-width: 1050px) {
    text-align: center;
  }
`;

export const HeroButtonContainer = styled.a`
  margin-top: 1.5em;
  background-image: linear-gradient(#111, #111),
    linear-gradient(90deg, #ec6192, #ec4c34, #ffbd2b, #ebde56, #57c754, #53a1eb);
  padding: 2px;
  background-clip: content-box, border-box;
  border-radius: 0.8em;
  transition: transform 0.2s ease-in-out 0s;
  transform: translateY(0);

  &:hover {
    transform: translateY(-1.5px);
  }
`;

export const HeroButtonWrap = styled(DisFlex_AIC)`
  position: relative;
  box-sizing: border-box;
  color: #ececec;
  padding: 0.8em 1.5em;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  border: none;
  text-decoration: none;
  border-radius: 0.8em;

  &:hover {
    background: linear-gradient(
      to bottom,
      #69696933 0%,
      #69696933 4%,
      #69696933 100%
    );
  }

  .play-btn-event-horizon {
    border-radius: 50%;
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    box-shadow: 0px 2px 5px #f5d130;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false'%3E%3Cg%3E%3Cpath fill='%23d6d6d6' d='M8 5v14l11-7z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");

    &::after {
      position: absolute;
      content: '';
      box-shadow: 0px 2px 5px #f5c130;
      height: 20px;
      width: 20px;
      top: 0px;
      left: 0px;
      border-radius: 50%;
      animation: ${RDash} 7s infinite linear;
    }
  }
`;

export const HoloSvgContainer = styled(RelativePosition)`
  transform: rotate(90deg);

  @media screen and (max-width: 1050px) {
    margin-top: 5px;
    transform: rotate(180deg);
  }

  @media screen and (max-width: 835px) {
    & > svg {
      width: 340px;
      height: 340px;
    }
  }

  @media screen and (max-width: 735px) {
    & > svg {
      width: 250px;
      height: 250px;
    }
  }
`;

export const SectionContainer = styled(DisFlex_AIC)`
  color: var(--fg-color);
  flex-direction: column;
  font-size: 1rem;

  @media screen and (max-width: 1050px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 735px) {
    font-size: 0.7rem;
  }

  .section-title {
    font-size: 1.5em;
    font-weight: bold;
    text-transform: uppercase;
  }

  .section-date {
    font-size: 0.83em;
    color: #999;
    font-weight: bold;
    margin-top: 0.5em;
  }

  .section-items-container {
    margin-top: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // --<LIVE SECTION>--

  .social_item_wrap {
    height: 8em;
    width: 8em;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
    background-color: #222;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s ease-in-out 0s;
    transform: translateY(0);
    font-size: 1rem;

    @media screen and (max-width: 1050px) {
      font-size: 0.85rem;
    }

    @media screen and (max-width: 735px) {
      font-size: 0.67rem;
    }

    &:first-child:hover {
      background-color: #d9264d;
      transform: translateY(-3px);

      & > .social-icon > svg > .yt-b {
        fill: #222;
      }
      & > .social-icon > svg > .yt-p {
        fill: #d9264d;
      }
    }

    &:nth-child(2) {
      margin: 0 2.5em;
      transform: translateY(-2em);

      &:hover {
        background-color: #4267b2;
        transform: translateY(calc(-2em - 3px));

        & > .social-icon > svg > path {
          fill: #222;
        }
      }
    }

    &:last-child:hover {
      background-color: #5a3e85;
      transform: translateY(-3px);

      & > .social-icon > svg > path {
        fill: #222;
      }
    }
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    padding: 0.7em 0.9em;
    border-radius: 40px;
    font-size: 0.85em;
    font-weight: bold;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    text-transform: uppercase;
    transform: translate(-50%, -100%);
    transition: all 0.3s ease;
    z-index: 1;
    color: currentColor;
    white-space: nowrap;

    &::after {
      position: absolute;
      bottom: 1px;
      left: 50%;
      width: 0;
      height: 0;
      content: '';
      border: solid;
      border-width: 10px 10px 0 10px;
      border-color: transparent;
      transform: translate(-50%, 100%);
    }

    &--yt {
      &:hover {
        .tooltip {
          visibility: visible;
          opacity: 1;
          transform: translate(-50%, -150%);
          background-color: #d9264d;

          &::after {
            border-top-color: #d9264d;
          }
        }
      }
    }

    &--fb {
      &:hover {
        .tooltip {
          visibility: visible;
          opacity: 1;
          transform: translate(-50%, -150%);
          background-color: #4267b2;

          &::after {
            border-top-color: #4267b2;
          }
        }
      }
    }

    &--tw {
      &:hover {
        .tooltip {
          visibility: visible;
          opacity: 1;
          transform: translate(-50%, -150%);
          background-color: #5a3e85;

          &::after {
            border-top-color: #5a3e85;
          }
        }
      }
    }
  }

  .social-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3.75em;
    height: 3.75em;

    & > svg {
      width: 3.75em;
      height: 3.75em;
    }
  }

  // --<FEATURED EPIDODES SECTION>--

  .video_section {
    width: 100%;
    font-size: 1rem;
    margin-top: 3em !important;

    @media screen and (max-width: 735px) {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem !important;
    }
  }

  .featured_video_container {
    width: 300px;
    margin: 0 8px 40px 8px;
    cursor: pointer;
  }

  .video_wrapper {
    display: flex;
    flex-flow: column nowrap;
  }

  .video_thumbnail_container {
    position: relative;
    width: 100%;
    height: auto;
    background-color: rgba(56, 56, 56, 0.5);
    border-radius: 4px;

    &::before {
      display: block;
      content: '';
      z-index: -1;
      width: 100%;
      padding-top: 56.25%;
    }
  }

  .video_thumbnail_wrapper {
    outline: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: auto;

    img {
      border-radius: 4px;
    }
  }

  .video_body_container {
    padding-top: 10px;
  }

  .video_body_title {
    color: var(--fg-color);
    font-size: 1em;
    font-weight: bold;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.2em;
  }

  .video_body_description {
    color: #999;
    padding-top: 5px;
    font-size: 0.92em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    padding-bottom: 1px;
  }
`;

// ---<Join Community>---

export const JoinCommunityContainer = styled.div`
  font-size: 0.9rem;
  display: flex;
  position: relative;
  max-height: 750px;
  max-width: 60vw;
  margin: 5em auto;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-image: linear-gradient(#1c1c1c, #1c1c1c),
    linear-gradient(90deg, #ec6192, #ec4c34, #ffbd2b, #ebde56, #57c754, #53a1eb);
  padding: 1px;
  background-clip: content-box, border-box;

  @media screen and (max-width: 735px) {
    max-width: 85vw;
  }
`;

export const ShowcaseContainer = styled(DisFlex_AIC)`
  flex: 1;
  flex-direction: column;
  color: var(--fg-color);
  font-size: 1rem;
  margin-top: 1.5em;
  position: relative;

  @media screen and (max-width: 1150px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 735px) {
    font-size: 0.7rem;
  }

  .Showcase-title {
    font-size: 1.3em;
    font-weight: bold;
    padding-bottom: 7px;
    white-space: nowrap;
  }

  .Showcase-line {
    width: 6em;
    height: 1px;
    background-color: #444;
  }
`;

export const IconsShowcaseContainer = styled(DisFlex_AIC_JCC)`
  margin-top: 1.5em;
  flex-flow: wrap;
`;
export const IconShowcase = styled(RelativePosition)`
  height: 5em;
  width: 5em;
  margin: 0.5em;
  margin-bottom: 1.5em;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  background-color: #222;
  transition: transform 0.2s ease-in-out 0s;
  transform: translateY(0);

  @media screen and (max-width: 1150px) {
    font-size: 0.85em;
  }

  &:hover {
    background-color: #222;
    transform: translateY(-3px);
  }

  .icon_wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;

    @media screen and (max-width: 1150px) {
      height: 40px;
      width: 40px;

      & > svg {
        height: 40px;
        width: 40px;
      }
    }
  }

  .icon-yt {
    height: 50px;
    width: 50px;
    & > svg {
      height: 50px;
      width: 50px;
    }

    @media screen and (max-width: 1150px) {
      height: 30px;
      width: 30px;

      & > svg {
        height: 30px;
        width: 30px;
      }
    }
  }

  .icon-tw {
    height: 45px;
    width: 45px;
    & > svg {
      height: 45px;
      width: 45px;
    }
    @media screen and (max-width: 1150px) {
      height: 30px;
      width: 30px;

      & > svg {
        height: 30px;
        width: 30px;
      }
    }
  }
`;

// --------------

export const SubscribeContainer = styled(DisFlex_AIC)`
  flex-direction: column;
  margin: 10px;

  .sub {
    font-size: 1.1em;
    padding: 7px 0;
    white-space: nowrap;
  }

  .sub-txt {
    color: #999;
    font-size: 1.05em;
    text-align: center;
  }
`;

export const SForm = styled(DisFlex_AIC_JCC)`
  position: relative;
  margin: 20px 0 5px 0;
  width: 100%;
  background-color: #333;
  transition: background-color 0.3s ease-in-out;
  flex-flow: row nowrap;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 0;
`;

export const SubForm = styled(SForm)`
  ${(props) =>
    props.Focus &&
    css`
      box-shadow: 0 0 0 2px #a9ff9457;
      background-color: transparent;
    `}
`;

export const SubInput = styled.div`
  background-color: green;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  outline: none;
  width: 100%;
  height: 100%;
  background-color: transparent;
  font-size: 1.08em;
  transition: background-color 0.3s ease-in-out;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &::placeholder {
    font-size: 0.9em;
  }
`;

export const SubMessageBox = styled.div`
  position: fixed;
  bottom: 20px; // footer padding: 10px 16px;
  right: 50%;
  left: 50%;
  transition: transform 0.5s ease-in-out;
  transform: translate(-50%, -50%);
  padding: 10px;
  min-width: 35%;
  max-width: 50%;
  background-color: #6cb429dc;
  text-align: center;
  border-radius: 2px;
  z-index: 2;

  transform: translate(-50%, calc(20px - 100%));

  @media screen and (max-width: 1150px) {
    min-width: 75%;
    max-width: 90%;
  }
`;

export const SubButtonContainer = styled(DisFlex_AIC_JCC)`
  border: none;
  margin: 4px;
  padding: 8px;
  background-color: #555;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  color: #f1f1f1;

  border: 1px solid #666;

  &:hover {
    color: #222;
    background-color: #80b71a96;
    border: 1px solid #9bd43181;
  }
`;

export const SubButton = styled.div`
  font-weight: bold;

  &:hover {
    transform: translateY(0px);
    box-shadow: none;
  }
`;
