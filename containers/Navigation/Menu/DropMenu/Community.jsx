import React, { memo, forwardRef } from 'react';
import MenuItemsList from '../MenuItemsList';
import { MenuContainer } from '../styles';
import PropTypes from 'prop-types';
import { community_categories } from '../../../../data/Community.json';

const Community = forwardRef(({ Id }, ref) => {
  return (
    <MenuContainer ref={ref} id={Id}>
      <MenuItemsList Categories={community_categories} />
    </MenuContainer>
  );
});

Community.displayName = 'Community';

Community.propTypes = {
  Id: PropTypes.string.isRequired
};

export default memo(Community);
