import React, {
  memo,
  useReducer,
  useState,
  useCallback,
  useEffect,
  useRef
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
  RightContainer
} from './styles';
import Link from 'next/link';
import { useMediaQuery } from '../../hooks';
import { DevRevLogo, Menuburger } from '../../components/svgs';
import { LazyRender, LoadingBar } from '../../components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

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
  ShowMenu: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'playlist':
      return {
        showPlaylistMenu: true,
        showCommunityMenu: false,
        ShowMenu: false
      };
    case 'community':
      return {
        showPlaylistMenu: false,
        showCommunityMenu: true,
        ShowMenu: false
      };
    case 'menu':
      return {
        showPlaylistMenu: false,
        showCommunityMenu: false,
        ShowMenu: true
      };
    case 'reset':
      return {
        showPlaylistMenu: false,
        showCommunityMenu: false,
        ShowMenu: false
      };
    default:
      return state;
  }
}

const Navigation = () => {
  const OpenedMenuCache = useRef(false);
  const innerWidthCache = useRef(false);
  const Router = useRouter();

  const [MenuState, dispatchMenu] = useReducer(reducer, initialState);
  const { ShowMenu, showPlaylistMenu, showCommunityMenu } = MenuState;
  const [disableTransition, setDisableTransition] = useState(false);

  const show = showPlaylistMenu || showCommunityMenu; // || more for dropMenu
  OpenedMenuCache.current = ShowMenu || showPlaylistMenu || showCommunityMenu;

  const mediaQueryMatches = useMediaQuery('max-width', 735);

  useEffect(() => {
    // for menu
    if (!mediaQueryMatches) {
      dispatchMenu({ type: 'reset' });
    }
  }, [mediaQueryMatches]);

  const ResetMenuOnRouteChange = () => {
    // event callback cannot access the latest state.
    // Therefore, we can incorporate useRef to solve this problem.
    if (OpenedMenuCache.current) {
      dispatchMenu({ type: 'reset' });
      let dropNode = document.getElementById('playlist-menu');
      if (dropNode?.style.display === 'block') dropNode.style.display = 'none';
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

  const HandleMenu = useCallback(() => {
    // HandleUserTabAction();
    dispatchMenu({ type: ShowMenu ? 'reset' : 'menu' });
  }, [ShowMenu]);

  // const HandleKeyPressMenu = (e) => {
  //   if (e.key === 'Enter' || e.which === 13) {
  //     dispatchMenu({ type: ShowMenu ? 'reset' : 'menu' });
  //   }
  // };

  if (typeof window !== 'undefined')
    innerWidthCache.current = window.innerWidth >= 735;

  const isMobileView = !(!mediaQueryMatches && innerWidthCache.current);

  return (
    <Nav menuIsOpen={ShowMenu}>
      <LoadingBar></LoadingBar>
      <NavContainer>
        <MenuContainer
          onMouseEnter={HandleDisableTransition}
          onMouseLeave={HandleEnableTransition}
        >
          <NavLogo data-content="Home">
            <Link href="/" aria-label="home">
              <a>
                <DevRevLogo />
              </a>
            </Link>
          </NavLogo>
          <LazyRender render={!isMobileView} Suspense={<MenuPlaceHolder />}>
            <MenuMain
              disTran={disableTransition}
              Show={show}
              dispatchMenu={dispatchMenu}
            />
          </LazyRender>
        </MenuContainer>
        <RightContainer>
          <MenuBurgerContainer
            tabIndex="0"
            onClick={HandleMenu}
            // onKeyPress={HandleKeyPressMenu}
          >
            <Burger>
              <Menuburger menuIsOpen={ShowMenu} />
            </Burger>
            <BurgerTxt>menu</BurgerTxt>
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
    </MenuMainPlaceholder>
  );
};

export default memo(Navigation);
