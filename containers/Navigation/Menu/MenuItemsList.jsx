import React, { memo, Fragment } from 'react';
import Link from 'next/link';
import { MenuItemLink, MenuItem } from './styles';
import PropTypes from 'prop-types';
import { useWL } from '../../../hooks';
import { useRouter } from 'next/router';

const MenuItemsList = ({ Categories }) => {
  const Router = useRouter();
  const { season } = Router.query;

  const [StoredValue] = useWL();
  const IsWatchLater = StoredValue?.wl.length > 0;

  const HandleLinkClick = (e, id_) => {
    if (id_ === 'MCKxxYwA62' && !IsWatchLater) {
      e.preventDefault();
      return false;
    } else if (id_ === 'MCKxxYwA62' && season === '0') {
      e.preventDefault();
      return false;
    }
    return true;
  };

  return (
    Categories &&
    Categories.map((category) => {
      return (
        <Fragment key={category?.id}>
          <MenuItem Disable={category?.id === 'MCKxxYwA62' && !IsWatchLater}>
            <Link href={category?.url} passHref>
              <MenuItemLink
                className={
                  category?.id === 'MCKxxYwA62' && !IsWatchLater && 'disabled'
                }
                onClick={(e) => HandleLinkClick(e, category?.id)}
                as="a"
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
