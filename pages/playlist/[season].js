import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import { PageContainer } from '../../styles/Pages';
import { useRouter } from 'next/router';
import {
  MainContainer,
  VideoPlayerContainer,
  VideoPlayerWrapper,
  Title,
  PrimaryContainer,
  SecondaryContainer,
  SecondaryWrapper,
  Overlay
} from '../../styles/Pages/SeasonPage';
import YouTube from 'react-youtube';
import { VideoContainer, PlaylistsPanel, MiniFooter } from '../../containers';
import { seasons } from '../../data/Seasons.json';
import SimpleBarReact from 'simplebar-react';
import { NextSeo } from 'next-seo';
import { useWL } from '../../hooks';

function Playlist({ episodes }) {
  const autoPlayCache = useRef(null);
  const Router = useRouter();
  const CurrentPlayingVideoCache = useRef(null);
  const { season, v } = Router.query;
  const CurrentVideoId = v;

  const [ListOfEpisodes, setListOfEpisodes] = useState([...(episodes ?? [])]);
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

  const [StoredValue] = useWL();

  const IsWatchLater = StoredValue?.wl.length > 0;

  useEffect(() => {
    if (season === '0' && IsWatchLater) {
      setSelectedSeason({ season: 'WL' });
      Router.push({
        pathname: `/playlist/[season]`,
        query: { season: 0, v: StoredValue?.wl[0]?.videoId }
      });
      setListOfEpisodes([...(StoredValue?.wl ?? [])]);
    } else {
      if (season === '0') {
        Router.push({
          pathname: `/playlist/[season]`,
          query: { season: 1, v: '7XjAtQbN-BQ' }
        });
      } else {
        setSelectedSeason({ season });
        setListOfEpisodes([...(episodes ?? [])]);
      }
    }
  }, [season]);

  const GetTheCurrentPlayingVideo = useCallback(() => {
    const CurrentPlayingEp = ListOfEpisodes.filter((ep) => {
      if (ep) return ep.videoId === CurrentVideoId;
      return false;
    });
    return CurrentPlayingEp;
  }, [CurrentVideoId, ListOfEpisodes]);

  const CurrentPlayingVideo = useMemo(() => GetTheCurrentPlayingVideo()[0], [
    CurrentVideoId,
    ListOfEpisodes
  ]);

  CurrentPlayingVideoCache.current = CurrentPlayingVideo;

  const GetNextVideo = (ListOfEpisodes_) => {
    const currentPlaying = CurrentPlayingVideoCache.current;
    const NextEp = ListOfEpisodes_.filter((ep) => {
      return ep?.ep === currentPlaying?.ep + 1;
    });
    return NextEp;
  };

  const OnVideoEnd = (season_, ListOfEpisodes_) => {
    if (autoPlayCache.current) {
      const NextEp = GetNextVideo(ListOfEpisodes_)[0];
      if (NextEp) {
        Router.push({
          pathname: `/playlist/[season]`,
          query: { season: season_, v: NextEp.videoId }
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
      modestbranding: 1
    }
  };

  const CurrentPlayingEpisode =
    GetTheCurrentPlayingVideo().length > 0
      ? GetTheCurrentPlayingVideo()[0]
      : ListOfEpisodes[0];

  return (
    <PageContainer>
      <Overlay Show={ShowParticipantProfile}></Overlay>
      {/* SEO */}
      <NextSeo
        title={`${CurrentPlayingEpisode?.tag} | ${CurrentPlayingEpisode?.title}`}
        description={CurrentPlayingEpisode?.description[0]}
        openGraph={{
          title: `${CurrentPlayingEpisode?.tag} | ${CurrentPlayingEpisode?.title}`,
          description: CurrentPlayingEpisode?.description[0],
          url: `https://devrev.ma/playlist/${CurrentPlayingEpisode?.ep}?v=${CurrentPlayingEpisode?.videoId}`,
          images: [
            {
              url: CurrentPlayingEpisode?.thumbnail,
              width: 720,
              height: 404,
              alt: CurrentPlayingEpisode?.tag
            }
          ],
          site_name: 'https://devrev.ma/'
        }}
        noindex={season === '0'}
      />
      {/* --- */}
      <MainContainer as="main">
        <PrimaryContainer>
          <VideoPlayerContainer>
            <VideoPlayerWrapper Visible={VideoIsVisible}>
              <YouTube
                videoId={CurrentVideoId ?? ListOfEpisodes[0]?.videoId}
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
            <div className="ep-num">{CurrentPlayingVideo?.tag ?? 'DevRev'}</div>
            <div className="vertical-line"></div>
            <div className="ac-title">{CurrentPlayingVideo?.title ?? ''}</div>
          </Title>
        </PrimaryContainer>
        <SecondaryContainer>
          <PlaylistsPanel
            autoPlay={autoPlay}
            handleCheckboxChange={handleCheckboxChange}
            ShowDescription={ShowDescription}
            setShowDescription={setShowDescription}
            SelectedSeason={SelectedSeason.season}
            setSelectedSeason={setSelectedSeason}
            CurrentPlayingVideo={CurrentPlayingVideo?.ep ?? 0}
            Description={CurrentPlayingVideo?.description}
            Participants={CurrentPlayingVideo?.participants}
            ShowMore={ShowParticipantProfile}
            setShowMore={setParticipantProfile}
          />
          <SecondaryWrapper>
            <SimpleBarReact style={{ maxHeight: '100%', paddingBottom: '5px' }}>
              {ListOfEpisodes?.map((episode) => {
                return (
                  <VideoContainer
                    PlayingState={PlayingState}
                    CurrentVidId={CurrentVideoId}
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { season: '1' } }, { params: { season: '2' } }],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const Episodes = { episodes: seasons[params.season] };
  return {
    props: {
      episodes: Episodes?.episodes ?? []
    }
  };
}

Playlist.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      ep: PropTypes.number.isRequired,
      videoId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default Playlist;
