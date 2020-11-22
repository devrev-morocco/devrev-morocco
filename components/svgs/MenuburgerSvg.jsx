import React, { memo } from 'react';
import { MenuburgerContainer, BurgerXSpan } from './styles';
import PropTypes from 'prop-types';

function MenuburgerSvg({ menuIsOpen = false }) {
  return (
    <MenuburgerContainer>
      <BurgerXSpan menuIsOpen={menuIsOpen}></BurgerXSpan>
      <BurgerXSpan menuIsOpen={menuIsOpen}></BurgerXSpan>
      <BurgerXSpan menuIsOpen={menuIsOpen}></BurgerXSpan>
    </MenuburgerContainer>
  );
}

MenuburgerSvg.propTypes = {
  menuIsOpen: PropTypes.bool
};

export default memo(MenuburgerSvg);
