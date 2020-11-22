import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { PageContainer } from '../../../styles/Pages';
import { useRouter } from 'next/router';
import {
  MainContainer,
  VideoPlayerContainer,
  VideoPlayerWrapper,
  Title,
  PrimaryContainer,
  SecondaryContainer,
  SecondaryWrapper,
  Overlay,
  PublishedAtContainer
} from '../../../styles/Pages/PlaylistPage';
import YouTube from 'react-youtube';
import {
  VideoContainer,
  PlaylistsPanel,
  MiniFooter
} from '../../../containers';
import { NextSeo, BreadcrumbJsonLd, VideoJsonLd } from 'next-seo';
import dynamic from 'next/dynamic';

const SimpleBarReact = dynamic(() => import('simplebar-react'), {
  // eslint-disable-next-line react/display-name
  loading: () => <div></div>
});
function Playlist({ Episodes, CurrentPlayingEp }) {
  const autoPlayCache = useRef(null);
  const CurrentPlayingVideoCache = useRef(null);
  const Router = useRouter();
  const { season } = Router.query;

  const [ListOfEpisodes, setListOfEpisodes] = useState([...(Episodes ?? [])]);
  const [VideoIsVisible, setVideoIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [SelectedSeason, setSelectedSeason] = useState({ season: '' });
  const [ShowDescription, setShowDescription] = useState(false);
  const [PlayingState, setPlayingState] = useState(null);
  const [ShowParticipantProfile, setParticipantProfile] = useState(null);

  autoPlayCache.current = autoPlay;

  const handleCheckboxChange = (event) => {
    setAutoPlay(event.target.checked);
  };

  useEffect(() => {
    setSelectedSeason({ season });
    setListOfEpisodes([...(Episodes ?? [])]);
  }, [season]);

  CurrentPlayingVideoCache.current = CurrentPlayingEp;

  const GetNextVideo = (ListOfEpisodes_) => {
    const currentPlaying = CurrentPlayingVideoCache.current;
    const NextEp = ListOfEpisodes_.find((ep) => {
      return ep?.ep === currentPlaying?.ep + 1;
    });
    return NextEp;
  };

  const OnVideoEnd = (season_, ListOfEpisodes_) => {
    if (autoPlayCache.current) {
      const NextEp = GetNextVideo(ListOfEpisodes_);
      if (NextEp) {
        Router.push({
          pathname: `/playlist/[season]/[episode]`,
          query: { season: season_, episode: NextEp.stringUrl }
        });
      }
    }
  };

  const onPlayerStateChange = (event) => {
    setPlayingState(event.data);
  };

  const PlayVideo = (event) => {
    event.target.playVideo();
    setVideoIsVisible(true);
  };

  const iframeObj = {
    height: '100%',
    width: '100%',
    playerVars: {
      controls: 1,
      autoplay: 1,
      enablejsapi: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
      origin: 'https://devrev.ma/'
    }
  };

  const {
    ep,
    title,
    thumbnail,
    stringUrl,
    description,
    videoId,
    participants,
    publishedAt,
    duration
  } = CurrentPlayingEp;

  const epTag = stringUrl?.split('-')[1];

  return (
    <PageContainer>
      <Overlay Show={ShowParticipantProfile}></Overlay>
      {/* --- SEO --- */}
      <NextSeo
        title={title}
        description={description[0]}
        openGraph={{
          title: title,
          description: description[0],
          url: `https://devrev.ma/playlist/${ep}/${stringUrl}`,
          images: [
            {
              url: `https://devrev.ma${thumbnail}`,
              width: 720,
              height: 404,
              alt: `DevRev #${epTag}`
            }
          ],
          site_name: 'https://devrev.ma/'
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'DevRev',
            item: 'https://www.devrev.ma/'
          },
          {
            position: 2,
            name: `season ${season}`,
            item: `https://www.devrev.ma/playlist/${season}/`
          },
          {
            position: 3,
            name: `episode ${ep}`,
            item: `https://www.devrev.ma/playlist/${season}/${stringUrl}`
          }
        ]}
      />
      <VideoJsonLd
        name={title}
        description={description[0]}
        contentUrl={`https://youtube.com/watch?v=${videoId}`}
        embedUrl={`https://www.youtube.com/embed/${videoId}`}
        uploadDate={publishedAt}
        duration={duration}
        thumbnailUrls={[`https://devrev.ma${thumbnail}`]}
      />
      {/* ----------- */}
      <MainContainer as="main">
        <PrimaryContainer>
          <VideoPlayerContainer>
            <VideoPlayerWrapper Visible={VideoIsVisible}>
              <YouTube
                videoId={videoId}
                opts={iframeObj}
                onReady={PlayVideo}
                onEnd={() => OnVideoEnd(season, ListOfEpisodes)}
                onStateChange={(event) =>
                  onPlayerStateChange(event, season, ListOfEpisodes)
                }
              />
            </VideoPlayerWrapper>
          </VideoPlayerContainer>
          <Title>
            <div className="ep-tag">{`DevRev #${epTag}`}</div>
            <div className="title-vertical-line"></div>
            <div className="ep-title">{title}</div>
          </Title>
          <PublishedAtContainer>
            {publishedAt?.toFormattedDate() ?? ''}
          </PublishedAtContainer>
        </PrimaryContainer>
        <SecondaryContainer>
          <PlaylistsPanel
            autoPlay={autoPlay}
            handleCheckboxChange={handleCheckboxChange}
            ShowDescription={ShowDescription}
            setShowDescription={setShowDescription}
            SelectedSeason={SelectedSeason.season}
            setSelectedSeason={setSelectedSeason}
            CurrentPlayingVideo={ep}
            Description={description}
            Participants={participants}
            ShowMore={ShowParticipantProfile}
            setShowMore={setParticipantProfile}
          />
          <SecondaryWrapper>
            <SimpleBarReact style={{ maxHeight: '100%', paddingBottom: '5px' }}>
              {ListOfEpisodes?.map((episode) => {
                return (
                  <VideoContainer
                    PlayingState={PlayingState}
                    CurrentVidId={videoId}
                    Season={season}
                    key={episode.videoId}
                    Episode={episode}
                  ></VideoContainer>
                );
              })}
            </SimpleBarReact>
          </SecondaryWrapper>
        </SecondaryContainer>
      </MainContainer>
      <MiniFooter />
    </PageContainer>
  );
}

const PlayListUrlMap = () => {
  const { seasons } = require('../../../data/Seasons.json');

  const Arr = [];
  for (let season in seasons) {
    for (let i in seasons[season]) {
      Arr.push({ params: { season, episode: seasons[season][i].stringUrl } });
    }
  }
  return Arr;
};

export async function getStaticPaths() {
  return {
    paths: PlayListUrlMap(),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { seasons } = require('../../../data/Seasons.json');

  const Episodes = seasons[params.season] ?? [];
  const CurrentPlayingEp = Episodes?.find(
    (Ep) => Ep.stringUrl === params.episode
  );

  return {
    props: {
      Episodes,
      CurrentPlayingEp
    }
  };
}

Playlist.propTypes = {
  Episodes: PropTypes.arrayOf(
    PropTypes.shape({
      ep: PropTypes.number.isRequired,
      season: PropTypes.number.isRequired,
      stringUrl: PropTypes.string.isRequired,
      videoId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string),
      participants: PropTypes.arrayOf(
        PropTypes.shape({
          Index: PropTypes.number,
          Name: PropTypes.string,
          imageUrl: PropTypes.string,
          About: PropTypes.string,
          linkedIn: PropTypes.string,
          ShowMore: PropTypes.string,
          setShowMore: PropTypes.func,
          Id: PropTypes.string
        })
      )
    })
  ),
  CurrentPlayingEp: PropTypes.shape({
    ep: PropTypes.number.isRequired,
    season: PropTypes.number.isRequired,
    stringUrl: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string),
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        Index: PropTypes.number,
        Name: PropTypes.string,
        imageUrl: PropTypes.string,
        About: PropTypes.string,
        linkedIn: PropTypes.string,
        ShowMore: PropTypes.string,
        setShowMore: PropTypes.func,
        Id: PropTypes.string
      })
    )
  })
};

export default Playlist;
