import React, { useState, memo, useRef } from 'react';
import PropTypes from 'prop-types';
import RippleEffect from './RippleEffect';
import { DropArrow } from '../svgs';
import {
  DD_Container,
  DD_Label,
  DD_Icon,
  DD_wrapper,
  DropItems_Container,
  DropItem
} from './styles';
import MenuTransition from '../../containers/Navigation/Menu/MenuTransition';
import { useRouter } from 'next/router';

const Seasons = ['1', '2'];
const VidId = { 1: '7XjAtQbN-BQ', 2: 'zjjKfqCgfTQ' };

const DropDown = ({ SelectedSeason, setSelectedSeason }) => {
  const DropNodeRef = useRef(null);
  const displayCache = useRef(false);
  const Router = useRouter();
  const [display, setDisplay] = useState(false);
  displayCache.current = display;

  const CloseDrop = (e) => {
    const dropNode = document.getElementById('dd');
    const dropItemsNode = document.getElementById('dd-item-container');
    const target = e.target;

    if (!dropNode?.contains(target) || dropItemsNode?.contains(target)) {
      OnExit();
      setDisplay(false);
      document.removeEventListener('click', CloseDrop);
    }
  };

  const HandleClick = () => {
    if (!displayCache.current) document.addEventListener('click', CloseDrop);
    setDisplay((value) => !value);
  };

  const OnEnter = () => {
    let dropNode = document.getElementById('dd-item-container');
    if (dropNode) dropNode.style.display = 'block';
  };

  const OnExit = () => {
    let dropNode = document.getElementById('dd-item-container');
    if (dropNode) dropNode.style.display = 'none';
  };

  const HandleSelect = (s) => {
    OnExit();
    setDisplay(false);
    setSelectedSeason({ season: s });

    Router.push(`/season/${s}?v=${VidId[s]}`);
  };

  return (
    <DD_Container id="dd">
      <RippleEffect noPadding={true} onClick={HandleClick}>
        <DD_wrapper>
          <DD_Label as="span">{`Season ${SelectedSeason}`}</DD_Label>
          <DD_Icon>
            <DropArrow Rotate={display} />
          </DD_Icon>
        </DD_wrapper>
      </RippleEffect>
      <MenuTransition
        onEnterFunc={OnEnter}
        onExitedFunc={OnExit}
        ref={DropNodeRef}
        Show={display}
      >
        <DropItems_Container ref={DropNodeRef} id="dd-item-container">
          {Seasons &&
            Seasons.map((s, i) => {
              return (
                <DropItem
                  className={`${SelectedSeason === s ? 'dd-active' : ''}`}
                  onClick={() => HandleSelect(s)}
                  key={i}
                >{`Season ${s}`}</DropItem>
              );
            })}
        </DropItems_Container>
      </MenuTransition>
    </DD_Container>
  );
};

DropDown.propTypes = {
  SelectedSeason: PropTypes.string,
  setSelectedSeason: PropTypes.func
};

export default memo(DropDown);
