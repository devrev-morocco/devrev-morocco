import React, { memo } from 'react';
import { MenuburgerContainer, BurgerXSpan } from './styles';
import PropTypes from 'prop-types';

function Menuburger({ menuIsOpen = false }) {
  return (
    <MenuburgerContainer>
      <BurgerXSpan menuIsOpen={menuIsOpen}></BurgerXSpan>
      <BurgerXSpan menuIsOpen={menuIsOpen}></BurgerXSpan>
      <BurgerXSpan menuIsOpen={menuIsOpen}></BurgerXSpan>
    </MenuburgerContainer>
  );
}

Menuburger.propTypes = {
  menuIsOpen: PropTypes.bool
};

export default memo(Menuburger);
