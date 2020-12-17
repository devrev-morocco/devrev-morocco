import React, {
  memo,
  useReducer,
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo
} from 'react';
import {
  Nav,
  NavContainer,
  NavLogo,
  MenuContainer,
  MenuMainPlaceholder,
  MenuBurgerContainer,
  Burger,
  BurgerTxt,
  RightContainer,
  WatchLaterContainer,
  ClockIconContainer,
  WLCounter
} from './styles';
import { WLMenuTriangle } from '../../styles/StyledComponents';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMediaQuery, useWL } from '../../hooks';
import { DevRevSvg, MenuburgerSvg, ClockSvg } from '../../components/svgs';
import { LazyRender, LoadingBar } from '../../components';
import { useRouter } from 'next/router';
import { Timer } from '../../utils';
import WatchLaterDrop from './WatchLaterDrop';

const MenuMain = dynamic(() => import('./Menu/MenuMain'), {
  // eslint-disable-next-line react/display-name
  loading: () => <MenuPlaceHolder />,
  ssr: false
});

const MobileMenu = dynamic(() => import('./MobileMenu'), {
  // eslint-disable-next-line react/display-name
  loading: () => <div style={{ display: 'none' }}></div>,
  ssr: false
});

const initialState = {
  showPlaylistMenu: false,
  showCommunityMenu: false,
  ShowWatchLater: false,
  ShowMenu: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'playlist':
      return {
        showPlaylistMenu: true,
        showCommunityMenu: false,
        ShowWatchLater: false,
        ShowMenu: false
      };
    case 'community':
      return {
        showPlaylistMenu: false,
        showCommunityMenu: true,
        ShowWatchLater: false,
        ShowMenu: false
      };
    case 'menu':
      return {
        showPlaylistMenu: false,
        showCommunityMenu: false,
        ShowWatchLater: false,
        ShowMenu: true
      };
    case 'wl':
      return {
        showPlaylistMenu: false,
        showCommunityMenu: false,
        ShowWatchLater: true,
        ShowMenu: false
      };
    case 'reset':
      return {
        showPlaylistMenu: false,
        showCommunityMenu: false,
        ShowWatchLater: false,
        ShowMenu: false
      };
    default:
      return state;
  }
}

const Navigation = () => {
  const OpenedMenuCache = useRef(false);
  const innerWidthCache = useRef(false);
  const WLCartInterval = useRef(null);
  const Router = useRouter();

  const [MenuState, dispatchMenu] = useReducer(reducer, initialState);
  const {
    ShowMenu,
    showPlaylistMenu,
    showCommunityMenu,
    ShowWatchLater
  } = MenuState;
  const [disableTransition, setDisableTransition] = useState(false);
  const [WlPulseTrigger, setWlPulseTrigger] = useState(false);

  const mediaQueryMatches = useMediaQuery('max-width', 735);
  const [StoredValue] = useWL();

  const show = useMemo(() => showPlaylistMenu || showCommunityMenu, [
    showCommunityMenu,
    showPlaylistMenu
  ]); // || more dropMenus

  if (typeof window !== 'undefined')
    innerWidthCache.current = window.innerWidth >= 735;

  const isMobileView = !(!mediaQueryMatches && innerWidthCache.current);
  const IsWatchLater = StoredValue?.wl.length > 0;

  OpenedMenuCache.current = ShowMenu || show || ShowWatchLater;

  useEffect(() => {
    if (!mediaQueryMatches && ShowMenu) {
      dispatchMenu({ type: 'reset' });
    }
  }, [mediaQueryMatches]);

  useEffect(() => {
    if (IsWatchLater) {
      setWlPulseTrigger(true);
      Timer(500).then(() => {
        setWlPulseTrigger(false);
      });
    }
  }, [StoredValue]);

  const ResetMenuOnRouteChange = () => {
    // event callback cannot access the latest state.
    // Therefore, we can incorporate useRef to solve this problem.
    if (OpenedMenuCache.current) {
      dispatchMenu({ type: 'reset' });
      let PlaylistNode = document.getElementById('playlist-menu');
      let CommunityNode = document.getElementById('community-menu');
      // Add every new dropdown on navbar here.
      if (PlaylistNode?.style.display === 'block')
        PlaylistNode.style.display = 'none';
      if (CommunityNode?.style.display === 'block')
        CommunityNode.style.display = 'none';
    }
  };

  Router?.events?.on('routeChangeComplete', ResetMenuOnRouteChange);
  Router?.events?.on('routeChangeError', ResetMenuOnRouteChange);

  const HandleDisableTransition = () => {
    setDisableTransition(true);
  };

  const HandleEnableTransition = () => {
    setDisableTransition(false);
  };

  const HandleUserTabAction = () => {
    const TabClass = 'user-is-tabbing';
    const BodyClass = document.body.classList;
    if (BodyClass.contains(TabClass)) BodyClass.remove(TabClass);
  };

  const HandleMenu = useCallback(() => {
    HandleUserTabAction();
    dispatchMenu({ type: ShowMenu ? 'reset' : 'menu' });
  }, [ShowMenu]);

  const HandleKeyPressMenu = (e) => {
    if (e.key === 'Enter' || e.which === 13) {
      dispatchMenu({ type: ShowMenu ? 'reset' : 'menu' });
    }
  };

  const WlCartEvent = (e) => {
    const target = e.target;
    const WLCart = document.getElementById('watch-later-cart');
    const WLClock = document.getElementById('wl-clock');

    if (!WLCart?.contains(target) && !WLClock.contains(target)) {
      clearInterval(WLCartInterval.current);
      dispatchMenu({ type: 'reset' });
      document.removeEventListener('click', WlCartEvent);
    }
  };

  const HandleWatchLaterCart = useCallback(() => {
    HandleUserTabAction();
    if (ShowWatchLater) {
      dispatchMenu({ type: 'reset' });
    } else {
      dispatchMenu({ type: 'wl' });
      document.addEventListener('click', WlCartEvent);
    }
  }, [ShowWatchLater]);

  const HandleKeyPressWlCart = (e) => {
    if (e.key === 'Enter' || e.which === 13) HandleWatchLaterCart();
  };

  const WlCartMouseIn = useCallback(() => {
    if (WLCartInterval.current) clearInterval(WLCartInterval.current);
  }, [WLCartInterval.current]);

  const WlCartMouseLeave = useCallback(() => {
    if (ShowWatchLater) {
      WLCartInterval.current = setInterval(() => {
        clearInterval(WLCartInterval.current);
        dispatchMenu({ type: 'reset' });
      }, 900);
    }
  }, [WLCartInterval.current, ShowWatchLater]);

  return (
    <Nav menuIsOpen={ShowMenu}>
      <LoadingBar></LoadingBar>
      <NavContainer>
        <MenuContainer
          onMouseEnter={HandleDisableTransition}
          onMouseLeave={HandleEnableTransition}
        >
          <NavLogo data-content="Home">
            <Link href="/">
              <a aria-label="home">
                <DevRevSvg />
              </a>
            </Link>
          </NavLogo>
          <LazyRender render={!isMobileView} Suspense={<MenuPlaceHolder />}>
            <MenuMain
              disTran={disableTransition}
              Show={show}
              dispatchMenu={dispatchMenu}
              wlOpened={ShowWatchLater}
            />
          </LazyRender>
        </MenuContainer>
        <RightContainer>
          <WatchLaterContainer
            onClick={HandleWatchLaterCart}
            id="wl-clock"
            aria-label="watch later"
            tabIndex={0}
            onKeyPress={HandleKeyPressWlCart}
            onMouseEnter={WlCartMouseIn}
            onMouseLeave={WlCartMouseLeave}
          >
            <ClockIconContainer>
              <ClockSvg />
            </ClockIconContainer>
            <WLCounter as="span" Trigger={WlPulseTrigger}>
              <span>{StoredValue?.wl.length ?? 0}</span>
            </WLCounter>
            <WLMenuTriangle
              style={{ bottom: '-3px', right: '20%' }}
              Enable={ShowWatchLater}
            ></WLMenuTriangle>
          </WatchLaterContainer>
          <WatchLaterDrop
            Show={ShowWatchLater}
            ShoppingCartMouseIn={WlCartMouseIn}
            ShoppingCartMouseLeave={WlCartMouseLeave}
          />
          <MenuBurgerContainer
            onClick={HandleMenu}
            onKeyPress={HandleKeyPressMenu}
          >
            <Burger>
              <MenuburgerSvg menuIsOpen={ShowMenu} />
            </Burger>
            <BurgerTxt tabIndex={0}>menu</BurgerTxt>
          </MenuBurgerContainer>
          <LazyRender render={isMobileView} Suspense={null}>
            <MobileMenu ShowMenu={ShowMenu} />
          </LazyRender>
        </RightContainer>
      </NavContainer>
    </Nav>
  );
};

const MenuPlaceHolder = () => {
  return (
    <MenuMainPlaceholder>
      <div></div>
      <div></div>
      <div></div>
    </MenuMainPlaceholder>
  );
};

export default memo(Navigation);
