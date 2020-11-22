import styled, { css } from 'styled-components';

export const RelativePosition = styled.div`
  position: relative;
`;

export const AbsolutePosition = styled.div`
  position: absolute;
`;

export const DisFlex = styled.div`
  display: flex;
`;

export const DisFlex_AIC = styled.div`
  display: flex;
  align-items: center;
`;
export const DisFlex_JCC = styled.div`
  display: flex;
  justify-content: center;
`;
export const DisFlex_AIC_JCC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextOverflowHidden = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DisNone = styled.div`
  display: none;
`;

// <------- CSS --------->

export const Visible = css`
  visibility: visible;
`;
