import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Mobile_Menu_container } from './styles';
import SubMenuItem from './SubMenuItem';
import { community_categories } from '../../../data/Community.json';
import { playlist_categories } from '../../../data/PlayList.json';

const MobileMenu = ({ ShowMenu }) => {
  const [{ SubMenuIsOpen }, setSubMenuIsOpen] = useState({
    SubMenuIsOpen: null
  });

  const HandleSubMenu = (value_) => {
    const SubMenuIsOpen_ = SubMenuIsOpen === value_ ? null : value_;
    setSubMenuIsOpen({ SubMenuIsOpen: SubMenuIsOpen_ });
  };

  useEffect(() => {
    if (!ShowMenu) setSubMenuIsOpen({ SubMenuIsOpen: null });
  }, [ShowMenu]);

  return (
    <Mobile_Menu_container Show={ShowMenu}>
      <SubMenuItem
        Href="/playlist?list=ALL"
        label="playlist"
        Categories={playlist_categories}
        SubMenuIsOpen={SubMenuIsOpen}
        HandleSubMenu={HandleSubMenu}
      />
      <SubMenuItem
        Href="/"
        label="community"
        preventDefault={true}
        Categories={community_categories}
        SubMenuIsOpen={SubMenuIsOpen}
        HandleSubMenu={HandleSubMenu}
      />
    </Mobile_Menu_container>
  );
};

MobileMenu.propTypes = {
  ShowMenu: PropTypes.bool
};

export default memo(MobileMenu);
