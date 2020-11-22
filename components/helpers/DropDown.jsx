import React, { useState, memo, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import RippleEffect from './RippleEffect';
import { ArrowSvg } from '../svgs';
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

const DropDown = ({ SelectedSeason, setSelectedSeason }) => {
  const DropNodeRef = useRef(null);
  const displayCache = useRef(false);
  const Router = useRouter();

  const [playlistData, setPlaylistData] = useState({});
  const [display, setDisplay] = useState(false);

  displayCache.current = display;

  useEffect(() => {
    fetch('/api/playlistkeys')
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
    const target = e.target;
    const dropNode = document.getElementById('dropdown-menu');
    const dropItemsNode = document.getElementById(
      'dropdown-menu-items-container'
    );

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
    Router.push({
      pathname: `/playlist/[season]/[episode]`,
      query: { season: season_, episode: playlistData[season_] }
    });
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Seasons = useMemo(() => Object.keys(playlistData) ?? [], [
    playlistData
  ]);

  return (
    <DD_Container id="dropdown-menu">
      <RippleEffect noPadding onClick={HandleClick}>
        <DD_wrapper>
          <DD_Label as="span">{`Season ${SelectedSeason ?? ''}`}</DD_Label>
          <DD_Icon>
            <ArrowSvg Rotate={display} />
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
            Seasons.map((season_, idx) => {
              return (
                <DropItem
                  pass
                  className={`${SelectedSeason === season_ ? 'dd-active' : ''}`}
                  onClick={() => HandleSelect(season_)}
                  key={idx}
                >{`Season ${season_}`}</DropItem>
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
