import React, { memo, useState, useEffect, useRef, Fragment } from 'react';
import { useMediaQuery } from '../../../hooks';
import MenuTransition from '../Menu/MenuTransition';
import { mobileCheck } from '../../../utils';
import { WLCartContainerWrap, WLCart_Container, WLCartHeader } from './style';
import { useWL } from '../../../hooks';
import WlContent from './WlContent';
import NoWlContent from './NoWlContent';
import PropTypes from 'prop-types';

const WatchLaterDrop = ({
  Show,
  ShoppingCartMouseIn,
  ShoppingCartMouseLeave
}) => {
  const CartNodeRef = useRef(null);
  const [IsMobile, setIsMobile] = useState(false);

  const mediaQueryMatches = useMediaQuery('max-width', 735);
  const [StoredValue] = useWL();

  const WlLength = StoredValue?.wl.length;
  const IsWatchLater = WlLength > 0;

  useEffect(() => {
    if (mobileCheck()) {
      setIsMobile(true);
    }
  }, []);

  const OnEnter = () => {
    let dropNode = document.getElementById('watch-later-cart');
    if (dropNode) dropNode.style.display = 'block';
  };

  const OnExit = () => {
    let dropNode = document.getElementById('watch-later-cart');
    if (dropNode) dropNode.style.display = 'none';
  };

  return (
    <MenuTransition
      ref={CartNodeRef}
      Show={Show}
      onEnterFunc={OnEnter}
      onExitedFunc={OnExit}
    >
      <WLCart_Container
        ref={CartNodeRef}
        isMobileMode={mediaQueryMatches}
        id="watch-later-cart"
        onMouseEnter={ShoppingCartMouseIn}
        onMouseLeave={ShoppingCartMouseLeave}
      >
        <WLCartHeader>
          {IsWatchLater && (
            <Fragment>
              <div className="wl-tt">Watch later</div>
              <div className="wl_line"></div>
              <div className="wl-ss">{`${
                WlLength > 1 ? `${WlLength} videos` : `1 video`
              }`}</div>
            </Fragment>
          )}
        </WLCartHeader>
        <WLCartContainerWrap
          isMobileMode={mediaQueryMatches}
          isMobile={IsMobile}
        >
          {IsWatchLater ? <WlContent /> : <NoWlContent />}
        </WLCartContainerWrap>
      </WLCart_Container>
    </MenuTransition>
  );
};

WatchLaterDrop.propTypes = {
  Show: PropTypes.bool,
  ShoppingCartMouseIn: PropTypes.func,
  ShoppingCartMouseLeave: PropTypes.func
};

export default memo(WatchLaterDrop);
