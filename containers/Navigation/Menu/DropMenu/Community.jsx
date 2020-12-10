import React, { memo, forwardRef } from 'react';
import MenuItemsList from '../MenuItemsList';
import { MenuContainer } from '../styles';
import { community_categories } from '../../../../data/CommunityMenu.json';

const Community = forwardRef((props, ref) => {
  return (
    <MenuContainer ref={ref} id="community-menu">
      <MenuItemsList Categories={community_categories} />
    </MenuContainer>
  );
});

Community.displayName = 'Community';

export default memo(Community);
