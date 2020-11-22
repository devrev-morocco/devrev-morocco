import styled from 'styled-components';
import { DisFlex_AIC_JCC } from '..';

export const ErrorContainer = styled(DisFlex_AIC_JCC)`
  position: absolute;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  height: 35%;
  text-align: center;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0 5px;

  & > span {
    color: #fafafa;
    background: linear-gradient(
      to right,
      #27c4f5,
      #a307ba,
      #fd8d32,
      #70c050,
      #27c4f5
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media screen and (max-width: 735px) {
    width: 85%;
    height: 45%;
  }
`;

export const ReturnBtn = styled(DisFlex_AIC_JCC)`
  font-weight: bold;
  font-size: 0.9em;
  padding: 2px;
  color: #fafafa;
  border: 4px;
  height: 30px;
  width: 100px;
  border-radius: 4px;
  background-image: linear-gradient(#222, #222),
    linear-gradient(90deg, #ec6192, #ec4c34, #ffbd2b, #ebde56, #57c754, #53a1eb);
  background-clip: content-box, border-box;
`;
