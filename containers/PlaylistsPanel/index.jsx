import React from 'react';
import {
  InfoDrop_container,
  InfoDrop_space,
  InfoDrop_line,
  VidDisc_show_more,
  VidDisc,
  InfoHeaderContainer,
  VidTitleContainer,
  VidState,
  AutoPlayContainer,
  VidDetailsContainer,
  ParticipantsContainer
} from './styles';
import { DropDown, AutoPlaySwitch } from '../../components';
import Profile from './Profile';
import PropTypes from 'prop-types';

const PlaylistsPanel = ({
  autoPlay,
  handleCheckboxChange,
  ShowDescription,
  setShowDescription,
  SelectedSeason,
  setSelectedSeason,
  CurrentPlayingVideo,
  Description,
  Participants,
  ShowMore,
  setShowMore
}) => {
  return (
    <InfoHeaderContainer>
      <VidTitleContainer>
        <VidState>
          <DropDown
            SelectedSeason={SelectedSeason}
            setSelectedSeason={setSelectedSeason}
          ></DropDown>
          <div className="forward-slash-line"></div>
          <span>{`Episode ${CurrentPlayingVideo}`.trim()}</span>
        </VidState>
        <AutoPlayContainer>
          <span>autoplay</span>
          <AutoPlaySwitch
            autoPlay={autoPlay}
            handleCheckboxChange={handleCheckboxChange}
          ></AutoPlaySwitch>
        </AutoPlayContainer>
      </VidTitleContainer>
      {Participants && (
        <ParticipantsContainer>
          {Participants.map((profile, index) => {
            return (
              <Profile
                ShowMore={ShowMore}
                setShowMore={setShowMore}
                Id={profile.id}
                key={profile.id}
                Index={index}
                imageUrl={profile.image}
                About={profile.about}
                Name={profile.name}
                linkedIn={profile.linkedin}
              />
            );
          })}
        </ParticipantsContainer>
      )}
      <VidDetailsContainer>
        {!ShowDescription && (
          <VidDisc>{Description ? Description[0] : ''}</VidDisc>
        )}
        <InfoDrop_container Show={ShowDescription}>
          {Description &&
            Description.map((line, i) => {
              if (line === '__EMPTY_LINE__')
                return <InfoDrop_space key={i}></InfoDrop_space>;
              return <InfoDrop_line key={i}>{line}</InfoDrop_line>;
            })}
        </InfoDrop_container>
        <VidDisc_show_more
          onClick={() => setShowDescription((value) => !value)}
        >
          {ShowDescription ? 'show less' : 'show more'}
        </VidDisc_show_more>
      </VidDetailsContainer>
    </InfoHeaderContainer>
  );
};

PlaylistsPanel.propTypes = {
  autoPlay: PropTypes.bool,
  handleCheckboxChange: PropTypes.func,
  ShowDescription: PropTypes.bool,
  setShowDescription: PropTypes.func,
  ShowMore: PropTypes.string,
  setShowMore: PropTypes.func,
  SelectedSeason: PropTypes.string,
  setSelectedSeason: PropTypes.func,
  CurrentPlayingVideo: PropTypes.number,
  Description: PropTypes.arrayOf(PropTypes.string),
  Participants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      about: PropTypes.string,
      linkedin: PropTypes.string
    })
  )
};

export default PlaylistsPanel;
