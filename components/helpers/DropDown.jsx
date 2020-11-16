import React, { useState, memo, useRef, useEffect, useMemo } from 'react';
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
import { useWL } from '../../hooks';

const DropDown = ({ SelectedSeason, setSelectedSeason }) => {
  const DropNodeRef = useRef(null);
  const displayCache = useRef(false);
  const Router = useRouter();
  const [display, setDisplay] = useState(false);
  displayCache.current = display;

  const [playlistData, setPlaylistData] = useState({});

  useEffect(() => {
    fetch('/api/playlistdrop')
      .then((res) => res.json())
      .then(
        (data) => {
          setPlaylistData(data);
        },
        (error) => {
          console.log('Playlist-DropDown-error :>> ', error);
        }
      );
  }, []);

  const CloseDropMenu = (e) => {
    const dropNode = document.getElementById('dropdown-menu');
    const dropItemsNode = document.getElementById(
      'dropdown-menu-items-container'
    );
    const target = e.target;

    if (!dropNode?.contains(target) || dropItemsNode?.contains(target)) {
      OnExit();
      setDisplay(false);
      document.removeEventListener('click', CloseDropMenu);
    }
  };

  const HandleClick = () => {
    if (!displayCache.current)
      document.addEventListener('click', CloseDropMenu);
    setDisplay((value) => !value);
  };

  const OnEnter = () => {
    let dropNode = document.getElementById('dropdown-menu-items-container');
    if (dropNode) dropNode.style.display = 'block';
  };

  const OnExit = () => {
    let dropNode = document.getElementById('dropdown-menu-items-container');
    if (dropNode) dropNode.style.display = 'none';
  };

  const HandleSelect = (season_) => {
    OnExit();
    setDisplay(false);
    setSelectedSeason({ season: season_ });

    if (season_ === 'WL') {
      Router.push({
        pathname: `/playlist/[season]`,
        query: { season: 0 }
      });
    } else {
      Router.push({
        pathname: `/playlist/[season]`,
        query: { season: season_, v: playlistData[season_] }
      });
    }
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Seasons = useMemo(() => Object.keys(playlistData) ?? [], [
    playlistData
  ]);

  const [StoredValue] = useWL();

  const IsWatchLater = StoredValue?.wl.length > 0;

  console.log('DropDown', StoredValue);

  return (
    <DD_Container id="dropdown-menu">
      <RippleEffect noPadding onClick={HandleClick}>
        <DD_wrapper>
          <DD_Label as="span">{`${
            SelectedSeason === 'WL'
              ? 'Watch Later'
              : `Season ${SelectedSeason ?? ''}`
          }`}</DD_Label>
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
        <DropItems_Container
          ref={DropNodeRef}
          id="dropdown-menu-items-container"
        >
          {Seasons &&
            Seasons.map((season_, i) => {
              return (
                <DropItem
                  pass
                  className={`${SelectedSeason === season_ ? 'dd-active' : ''}`}
                  onClick={() => HandleSelect(season_)}
                  key={i}
                >{`Season ${season_}`}</DropItem>
              );
            })}
          {IsWatchLater && (
            <DropItem
              pass
              className={`${SelectedSeason === 'WL' ? 'dd-active' : ''}`}
              onClick={() => HandleSelect('WL')}
            >{`Watch Later`}</DropItem>
          )}
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
