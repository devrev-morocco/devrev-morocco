import React, { useState, memo } from 'react';
import { ActiveLink, RippleEffect } from '../../../components';
import PropTypes from 'prop-types';
import { DropArrow } from '../../../components/svgs';
import { NavLinkContainer, LinkNav, LinkSpan, LinkIcon } from './styles';
import { mobileCheck } from '../../../utils';

const MenuLink = ({
  children,
  Href = '/#',
  Label = '',
  preventDefault = false,
  Type,
  Id,
  // Show,
  dispatchMenu
}) => {
  //
  const [rotate, setRotate] = useState(false);

  const handleEnter = () => {
    setRotate(true);
    dispatchMenu({ type: Type });
    let dropNode = document.getElementById(Id);
    if (dropNode) dropNode.style.display = 'block';
  };
  const handleLeave = () => {
    // if(!mobileCheck())

    setRotate(false);
    dispatchMenu({ type: 'reset' });
    let dropNode = document.getElementById(Id);
    if (dropNode) dropNode.style.display = 'none';
  };

  const handleClick = () => {
    // if(mobileCheck()){
    //   if(Show){
    //     setRotate(false);
    //     dispatchMenu({ type: 'reset' });
    //     let dropNode = document.getElementById(Id);
    //     if (dropNode) dropNode.style.display = 'none';
    //   }
    //   else {
    //     setRotate(true);
    //     dispatchMenu({ type: 'reset' });
    //     dispatchMenu({ type: Type });
    //     let dropNode = document.getElementById(Id);
    //     if (dropNode) dropNode.style.display = 'block';
    //   }
    // }
  };

  const HandleLinkClick = (e) => {
    if (mobileCheck() || preventDefault) {
      e.preventDefault();
      return false;
    }
    return true;
  };

  return (
    <NavLinkContainer
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <RippleEffect>
        <ActiveLink href={Href} activeClassName="selected" passHref={true}>
          <LinkNav as="a" onClick={HandleLinkClick}>
            <LinkSpan as="span">{Label}</LinkSpan>
            <LinkIcon>
              <DropArrow Rotate={rotate} />
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
  Show: PropTypes.bool.isRequired
};

export default memo(MenuLink);
