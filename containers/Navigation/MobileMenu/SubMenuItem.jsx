import React, { memo, Fragment } from 'react';
import {
  Menu_submenu_item,
  Menu_submenu_Link,
  Menu_submenu_Arrow,
  Menu_submenu_DropDown,
  Submenu_DropDown_wrap
} from './styles';
import { DropArrow } from '../../../components/svgs';
import Link from 'next/link';
import PropTypes from 'prop-types';

const SubMenuItem = ({
  label,
  Categories = [],
  SubMenuIsOpen = null,
  HandleSubMenu
}) => {
  const SubLength = Categories?.length ?? 0;

  return (
    <Fragment>
      <Menu_submenu_item>
        <Menu_submenu_Link onClick={() => HandleSubMenu(label)}>
          {label}
        </Menu_submenu_Link>
        <Menu_submenu_Arrow onClick={() => HandleSubMenu(label)}>
          <DropArrow Rotate={SubMenuIsOpen === label} />
        </Menu_submenu_Arrow>
      </Menu_submenu_item>
      <Menu_submenu_DropDown
        style={{ height: SubMenuIsOpen === label ? `${SubLength * 40}px` : 0 }}
        Show={SubMenuIsOpen === label}
      >
        {Categories &&
          Categories.map((item) => {
            return (
              <Link href={item.url} passHref key={item.id}>
                <Submenu_DropDown_wrap
                  rel={item?.ExternalLink ? 'noreferrer' : ''}
                  target={`${item?.ExternalLink ? '_blank' : '_self'}`}
                >
                  {item.label}
                </Submenu_DropDown_wrap>
              </Link>
            );
          })}
      </Menu_submenu_DropDown>
    </Fragment>
  );
};

SubMenuItem.propTypes = {
  label: PropTypes.string,
  Categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      separateLine: PropTypes.bool.isRequired,
      ExternalLink: PropTypes.bool.isRequired
    })
  ),
  SubMenuIsOpen: PropTypes.string,
  HandleSubMenu: PropTypes.func
};

export default memo(SubMenuItem);
