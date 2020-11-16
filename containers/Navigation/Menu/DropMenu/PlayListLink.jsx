import React, { memo, forwardRef } from 'react';
import MenuItemsList from '../MenuItemsList';
import { MenuContainer } from '../styles';
import PropTypes from 'prop-types';
import { playlist_categories } from '../../../../data/PlayListMenu.json';

const PlayListLink = forwardRef(({ Id }, ref) => {
  return (
    <MenuContainer ref={ref} id={Id}>
      <MenuItemsList Categories={playlist_categories} />
    </MenuContainer>
  );
});

PlayListLink.displayName = 'PlayListLink';

PlayListLink.propTypes = {
  Id: PropTypes.string.isRequired
};

export default memo(PlayListLink);
