import React, { memo, useRef } from 'react';
import MenuTransition from './MenuTransition';
import MenuLink from './MenuLink';
import { PlayListLink, Community } from './DropMenu';
import PropTypes from 'prop-types';
import { MainMenu, NavLinkContainer, LinkNav, LinkSpan } from './styles';
import { MenuTriangle } from '../../../styles/StyledComponents';
import { ActiveLink, RippleEffect } from '../../../components';

const MenuMain = ({
  disTran = false,
  Show = false,
  dispatchMenu = () => void 0
}) => {
  const PlayListNodeRef = useRef(null);
  const CommunityNodeRef = useRef(null);

  return (
    <MainMenu>
      {/* ------- PLAYLIST ------- */}
      <MenuLink
        dispatchMenu={dispatchMenu}
        Show={Show}
        Type="playlist"
        Label="playlist"
        Href="/playlist/1/devrev-1"
        Id="playlist-menu"
      >
        <MenuTriangle Enable={Show}></MenuTriangle>
        <MenuTransition ref={PlayListNodeRef} Show={Show} disTran={disTran}>
          <PlayListLink ref={PlayListNodeRef} Id="playlist-menu" />
        </MenuTransition>
      </MenuLink>
      {/* ------- COMMUNITY ------- */}
      <MenuLink
        dispatchMenu={dispatchMenu}
        Show={Show}
        preventDefault={true}
        Type="community"
        Label="community"
        Id="community-menu"
      >
        <MenuTriangle Enable={Show}></MenuTriangle>
        <MenuTransition ref={CommunityNodeRef} Show={Show} disTran={disTran}>
          <Community ref={CommunityNodeRef} Id="community-menu" />
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
  dispatchMenu: PropTypes.func
};

export default memo(MenuMain);
