import React, { memo, useRef } from 'react';
import MenuLink from './MenuLink';
import { Episodes, Community } from './DropMenu';
import PropTypes from 'prop-types';
import { MainMenu, NavLinkContainer, LinkNav, LinkSpan } from './styles';
import { MenuTriangle } from '../../../styles/StyledComponents';
import { ActiveLink, RippleEffect, MenuTransition } from '../../../components';

const MenuMain = ({
  disTran = false,
  Show = false,
  dispatchMenu = () => void 0,
  wlOpened
}) => {
  const PlayListNodeRef = useRef(null);
  const CommunityNodeRef = useRef(null);

  return (
    <MainMenu>
      {/* ------- PLAYLIST ------- */}
      <MenuLink
        dispatchMenu={dispatchMenu}
        Type="playlist"
        Label="episodes"
        Href="/playlist/1/devrev-1"
        Id="playlist-menu"
        wlOpened={wlOpened}
      >
        <MenuTriangle Enable={Show}></MenuTriangle>
        <MenuTransition ref={PlayListNodeRef} Show={Show} disTran={disTran}>
          <Episodes ref={PlayListNodeRef} />
        </MenuTransition>
      </MenuLink>
      {/* ------- COMMUNITY ------- */}
      <MenuLink
        dispatchMenu={dispatchMenu}
        preventDefault
        Type="community"
        Label="community"
        Id="community-menu"
        wlOpened={wlOpened}
      >
        <MenuTriangle Enable={Show}></MenuTriangle>
        <MenuTransition ref={CommunityNodeRef} Show={Show} disTran={disTran}>
          <Community ref={CommunityNodeRef} />
        </MenuTransition>
      </MenuLink>
      {/* ------- ABOUT ------- */}
      <NavLinkContainer>
        <RippleEffect>
          <ActiveLink href="/about" activeClassName="selected" passHref={true}>
            <LinkNav as="a">
              <LinkSpan as="span">about</LinkSpan>
            </LinkNav>
          </ActiveLink>
        </RippleEffect>
      </NavLinkContainer>
    </MainMenu>
  );
};

MenuMain.propTypes = {
  disTran: PropTypes.bool,
  Show: PropTypes.bool,
  dispatchMenu: PropTypes.func,
  wlOpened: PropTypes.bool
};

export default memo(MenuMain);
