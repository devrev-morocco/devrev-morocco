import React from 'react';

const InfoHeader = ({
  autoPlay,
  handleCheckboxChange,
  ShowDescription,
  setShowDescription,
  ListOfEpisodes
}) => {
  return (
    <InfoHeaderContainer>
      <VidTitleContainer>
        <VidState>{'season 1 / episode 2'}</VidState>
        <AutoPlayContainer>
          <span>autoplay</span>
          <AutoPlaySwitch
            autoPlay={autoPlay}
            handleCheckboxChange={handleCheckboxChange}
          ></AutoPlaySwitch>
        </AutoPlayContainer>
      </VidTitleContainer>
      <VidDetailsContainer>
        {!ShowDescription && (
          <VidDisc>{ListOfEpisodes[0].description[0]}</VidDisc>
        )}
        <InfoDrop_container Show={ShowDescription}>
          {ListOfEpisodes[0].description.map((line, i) => {
            if (line === '__EMPTY_LINE__')
              return <InfoDrop_space></InfoDrop_space>;
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

export default InfoHeader;
