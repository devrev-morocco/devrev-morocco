import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Mobile_Menu_container,
  Menu_submenu_item,
  Menu_submenu_Link
} from './styles';
import Link from 'next/link';
import SubMenuItem from './SubMenuItem';
import { community_categories } from '../../../data/CommunityMenu.json';
import { playlist_categories } from '../../../data/PlayListMenu.json';

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
        label="playlist"
        Categories={playlist_categories}
        SubMenuIsOpen={SubMenuIsOpen}
        HandleSubMenu={HandleSubMenu}
      />
      <SubMenuItem
        label="community"
        Categories={community_categories}
        SubMenuIsOpen={SubMenuIsOpen}
        HandleSubMenu={HandleSubMenu}
      />
      <Menu_submenu_item>
        <Link href="/about" passHref>
          <Menu_submenu_Link as="a">about</Menu_submenu_Link>
        </Link>
      </Menu_submenu_item>
    </Mobile_Menu_container>
  );
};

MobileMenu.propTypes = {
  ShowMenu: PropTypes.bool
};

export default memo(MobileMenu);
