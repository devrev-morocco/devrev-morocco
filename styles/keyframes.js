import { keyframes } from 'styled-components';

export const Move100 = keyframes`
  0% {
     transform: translateX(100%);
    }

  100% {
      transform: translateX(0px);
    }
`;

export const GoogleRipple = keyframes`
  from {transform: scale3d(1, 1, 1);opacity: 0.7;}
  to {transform: scale3d(50, 50, 1);opacity: 0;}
`;

export const ScaleIn = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(0.8);
      opacity: 0;
    }
`;

export const ScaleOut = keyframes`
    0% {
      transform: scale(0.5);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
`;

export const FadeInTr = keyframes`
0% {
     transform: translateY(20px);
     opacity: 0;
   }

100% {
    transform: translateY(0px);
    opacity: 1;
    }
`;

export const LoadingBarProgress = keyframes`
  0%
    {background-position: 0% 0%}
  100%
    {background-position: -200% 0%}
`;

export const RDash = keyframes`
  0% {
    transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Opacity0to1 = keyframes`
0%
  { opacity:0;
    color: transparent;
  }
100%
  { opacity:1;
    color: #fafafa;
    }
`;

export const SmoothPopUpTransition = keyframes`
0% {
    transform: translate(-50%, 50%);
    top:100%;
  }
	100% {
    transform: translate(-50%, -50%);
    top: 50%;
	}
`;
