import styled from 'styled-components';
import { DisFlex_AIC_JCC } from '..';

export const PageContainer = styled.div`
  margin: 56px auto auto auto;
`;

export const ComingSoon = styled(DisFlex_AIC_JCC)`
  position: absolute;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  width: 30%;
  height: 30%;
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
    font-size: 2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media screen and (max-width: 735px) {
    width: 70%;
    height: 40%;
  }
`;
