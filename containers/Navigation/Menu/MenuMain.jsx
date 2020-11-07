import React, { memo, useRef } from 'react';
import MenuTransition from './MenuTransition';
import MenuLink from './MenuLink';
import { PlayList, Community } from './DropMenu';
import PropTypes from 'prop-types';
import { MainMenu } from './styles';
import { MenuTriangle } from '../../../styles/StyledComponents';

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
        Href="/playlist?list=ALL"
        Id="playlist-menu"
      >
        <MenuTriangle Enable={Show}></MenuTriangle>
        <MenuTransition ref={PlayListNodeRef} Show={Show} disTran={disTran}>
          <PlayList ref={PlayListNodeRef} Id="playlist-menu" />
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
    </MainMenu>
  );
};

MenuMain.propTypes = {
  disTran: PropTypes.bool,
  Show: PropTypes.bool,
  dispatchMenu: PropTypes.func
};

export default memo(MenuMain);
