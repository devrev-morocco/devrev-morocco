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

export const PopUpTransition450 = keyframes`
  0% {
    transform: translate(-50%, 50%);
    width: 450px;
    opacity: .8;
  }
	100% {
    transform: translate(-50%, -50%);
    width: 450px;
    opacity: 1;
	}
`;

export const PopUpTransition400 = keyframes`
  0% {
    transform: translate(-50%, 50%);
    width: 400px;
    opacity: .8;
  }
	100% {
    transform: translate(-50%, -50%);
    width: 400px;
    opacity: 1;
	}
`;

export const PopUpTransition90vw = keyframes`
  0% {
    transform: translate(-50%, 50%);
    width: 90vw;
    opacity: .8;
  }
	100% {
    transform: translate(-50%, -50%);
    width: 90vw;
    opacity: 1;
	}
`;

export const SectionMove = keyframes`
0% {
      opacity: 0;
      transform: translateX(-10px);
    }

100% {
       opacity: 1;
        transform: translateX(0px);
      }
`;

export const WlCounterPulse = keyframes`
    0% {
        opacity: 1;
        transform: scale3d(0.4, 0.4, 1)
    }

    80% {
        box-shadow: inset 0 0 0 2px var(--color-info-200);
        opacity: 0.1
    }

    100% {
        box-shadow: inset 0 0 0 2px rgba(111,148,182,0.8);
        opacity: 0;
        transform: scale3d(1.2, 1.2, 1)
    }
`;

export const scale_removal = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
`;

export const floatY = keyframes`
 0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-15px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`;

export const floatXR = keyframes`
 0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatex(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatex(15px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatex(0px);
	}
`;
export const floatXL = keyframes`
 0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatex(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatex(-15px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatex(0px);
	}
`;
