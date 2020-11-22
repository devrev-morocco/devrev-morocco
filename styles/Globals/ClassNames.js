import { css } from 'styled-components';
import { scale_removal } from '../keyframes';

export const Selectors = css`
  .selected {
    color: #fff;

    &::before {
      position: absolute;
      content: '';
      display: block;
      height: 2px;
      bottom: 0;
      background-image: linear-gradient(
        90deg,
        #ec6192,
        #ec4c34,
        #ffbd2b,
        #ebde56,
        #57c754,
        #53a1eb
      );
      width: 100%;
      left: 0;
      right: 0;
    }
  }

  .separator {
    width: 100%;
    height: 1px;
    margin-top: 8px;
    margin-bottom: 7px;
    background: var(--border-color);
  }

  .menu-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .menu-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 200ms, transform 200ms;
  }

  .menu-exit {
    opacity: 1;
  }

  .menu-exit-active {
    opacity: 0;
    transition: opacity 150ms;
    transform: translateY(0px);
    transition: opacity 200ms, transform 200ms;
  }

  .simplebar-scrollbar::before {
    background-color: #838383 !important;
  }

  .slide-removal {
    animation: ${scale_removal} 400ms;
  }
`;
