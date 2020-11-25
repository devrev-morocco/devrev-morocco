import React, { useState, memo } from 'react';
import { ActiveLink, RippleEffect } from '../../../components';
import PropTypes from 'prop-types';
import { ArrowSvg } from '../../../components/svgs';
import { NavLinkContainer, LinkNav, LinkSpan, LinkIcon } from './styles';
import { mobileCheck } from '../../../utils';

const MenuLink = ({
  children,
  Href = '/#',
  Label = '',
  preventDefault = false,
  Type,
  Id,
  dispatchMenu,
  wlOpened
}) => {
  const [rotate, setRotate] = useState(false);

  const HandleEnter = () => {
    if (!wlOpened) {
      setRotate(true);
      dispatchMenu({ type: Type });
      let dropNode = document.getElementById(Id);
      if (dropNode) dropNode.style.display = 'block';
    }
  };

  const HandleLeave = () => {
    setRotate(false);
    dispatchMenu({ type: 'reset' });
    let dropNode = document.getElementById(Id);
    if (dropNode) dropNode.style.display = 'none';
  };

  const HandleLinkClick = (e) => {
    if (mobileCheck() || preventDefault) {
      e.preventDefault();
      return false;
    }
    return true;
  };

  return (
    <NavLinkContainer onMouseEnter={HandleEnter} onMouseLeave={HandleLeave}>
      <RippleEffect>
        <ActiveLink href={Href} activeClassName="selected" passHref={true}>
          <LinkNav as="a" onClick={HandleLinkClick}>
            <LinkSpan as="span">{Label}</LinkSpan>
            <LinkIcon>
              <ArrowSvg Rotate={rotate} />
            </LinkIcon>
          </LinkNav>
        </ActiveLink>
      </RippleEffect>
      {children}
    </NavLinkContainer>
  );
};

MenuLink.propTypes = {
  Label: PropTypes.string.isRequired,
  Href: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
  Type: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  dispatchMenu: PropTypes.func,
  preventDefault: PropTypes.bool,
  wlOpened: PropTypes.bool
};

export default memo(MenuLink);
