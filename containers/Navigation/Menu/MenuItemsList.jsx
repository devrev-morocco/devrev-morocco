import React, { memo, Fragment } from 'react';
import Link from 'next/link';
import { MenuItemLink, MenuItem } from './styles';
import PropTypes from 'prop-types';

const MenuItemsList = ({ Categories }) => {
  return (
    Categories &&
    Categories.map((category) => {
      return (
        <Fragment key={category?.id}>
          <MenuItem>
            <Link href={category?.url} passHref>
              <MenuItemLink
                rel={category?.ExternalLink ? 'noreferrer' : ''}
                target={`${category?.ExternalLink ? '_blank' : '_self'}`}
              >
                {category?.label}
              </MenuItemLink>
            </Link>
          </MenuItem>
          {category?.separateLine && <div className="separator"></div>}
        </Fragment>
      );
    })
  );
};

MenuItemsList.propTypes = {
  Categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      separateLine: PropTypes.bool.isRequired,
      ExternalLink: PropTypes.bool.isRequired
    })
  )
};

export default memo(MenuItemsList);
