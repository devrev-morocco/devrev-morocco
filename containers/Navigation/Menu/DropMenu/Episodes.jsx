import React, { memo, forwardRef } from 'react';
import MenuItemsList from '../MenuItemsList';
import { MenuContainer } from '../styles';
import { playlist_categories } from '../../../../data/PlayListMenu.json';

const Episodes = forwardRef((props, ref) => {
  return (
    <MenuContainer ref={ref} id="playlist-menu">
      <MenuItemsList Categories={playlist_categories} />
    </MenuContainer>
  );
});

Episodes.displayName = 'Episodes';

export default memo(Episodes);
