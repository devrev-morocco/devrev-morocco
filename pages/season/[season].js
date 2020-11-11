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
  VidDetailsContainer,
  SecondaryWrapper,
  VidTitleContainer,
  InfoHeaderContainer,
  VidState,
  AutoPlayContainer,
  VidDisc,
  VidDisc_show_more,
  InfoDrop_container,
  InfoDrop_line,
  InfoDrop_space
} from '../../styles/Pages/SeasonPage';
import YouTube from 'react-youtube';
import { AutoPlaySwitch, DropDown } from '../../components';
import { VideoContainer } from '../../containers';
import { seasons } from '../../data/Seasons.json';
import SimpleBarReact from 'simplebar-react';

function Season({ episodes }) {
  const SeekSeen = useRef(false);
  const autoPlayCache = useRef(null);
  const Router = useRouter();
  const CurrentPlayingVideoCache = useRef(null);
  const { season, v, t, list } = Router.query;
  const CurrentVideoId = v;
  const TimeToSeek = t;

  const [ListOfEpisodes, setListOfEpisodes] = useState([...(episodes ?? [])]);
  const [VideoIsVisible, setVideoIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [SelectedSeason, setSelectedSeason] = useState({ season: '' });
  const [ShowDescription, setShowDescription] = useState(false);
  const [PlayingStateate, setPlayingState] = useState(null);

  autoPlayCache.current = autoPlay;

  const handleCheckboxChange = (event) => {
    setAutoPlay(event.target.checked);
  };

  useEffect(() => {
    setSelectedSeason({ season });
    setListOfEpisodes([...(episodes ?? [])]);
  }, [season]);

  const GetTheCurrentPlayingVideo = useCallback(() => {
    const CurrentPlayingEp = ListOfEpisodes.filter((ep) => {
      if (ep) return ep.videoId === v;
      return false;
    });
    return CurrentPlayingEp;
  }, [v, ListOfEpisodes]);

  const CurrentPlayingVideo = useMemo(() => GetTheCurrentPlayingVideo()[0], [
    v,
    ListOfEpisodes
  ]);
  CurrentPlayingVideoCache.current = CurrentPlayingVideo;

  const GetNextVideo = (ListOfEpisodes_) => {
    const currentPlaying = CurrentPlayingVideoCache.current;
    const NextEp = ListOfEpisodes_.filter((ep) => {
      if (ep) return ep.ep === currentPlaying?.ep + 1;
      return false;
    });

    return NextEp;
  };

  const onPlayerStateChange = useCallback(
    (event, season_, ListOfEpisodes_) => {
      setPlayingState(event.data);
      switch (event.data) {
        case 3:
          // setVideoIsVisible(true);
          break;
        case 0:
          // play the next video
          if (autoPlayCache.current) {
            const nextEp = GetNextVideo(ListOfEpisodes_)[0];
            if (nextEp) Router.push(`/season/${season_}?v=${nextEp.videoId}`);
          }
          break;
        case 1:
          // 1 means the player is ready to play
          if (!SeekSeen.current) {
            if (TimeToSeek !== 0) {
              event.target.seekTo(TimeToSeek);
              SeekSeen.current = true;
            }
          }
          break;
        default:
          break;
      }
    },
    [TimeToSeek]
  );

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

  // const PauseVideo = (event) => {
  //     event.target.pauseVideo();
  // };

  const PlayVideo = (event) => {
    // console.log('event', event)
    event.target.playVideo();
    setVideoIsVisible(true);
  };

  // const Seek = (event) => {
  //     // console.log('seek', event)
  //     event.target.seekTo(50);
  // };

  return (
    <PageContainer>
      <MainContainer>
        <PrimaryContainer>
          <VideoPlayerContainer>
            <VideoPlayerWrapper Visible={VideoIsVisible}>
              <YouTube
                videoId={CurrentVideoId}
                // id='devrev-player'
                // containerClassName={string}
                opts={iframeObj}
                onReady={PlayVideo}
                // onPlay={Seek}
                // onPause={func}
                // onEnd={func}
                // onError={func}
                onStateChange={(event) =>
                  onPlayerStateChange(event, season, ListOfEpisodes)
                }
                // onPlaybackRateChange={func}
                // onPlaybackQualityChange={func}
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
          {/* -------------------------------- */}
          <InfoHeaderContainer>
            <VidTitleContainer>
              <VidState>
                <DropDown
                  SelectedSeason={SelectedSeason.season}
                  setSelectedSeason={setSelectedSeason}
                ></DropDown>
                <div className="forward-slash-line"></div>
                <span>{`Episode ${CurrentPlayingVideo?.ep ?? ''}`}</span>
              </VidState>
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
                <VidDisc>{CurrentPlayingVideo?.description[0] ?? ''}</VidDisc>
              )}
              <InfoDrop_container Show={ShowDescription}>
                {CurrentPlayingVideo?.description.map((line, i) => {
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
          {/* -------------------------------- */}
          {/* -------------------------------- */}
          <SecondaryWrapper>
            <SimpleBarReact style={{ maxHeight: '100%', paddingBottom: '5px' }}>
              {ListOfEpisodes?.map((episode) => {
                return (
                  <VideoContainer
                    PlayingState={PlayingStateate}
                    CurrentVidId={v}
                    Season={season}
                    key={episode.videoId}
                    Episode={episode}
                  ></VideoContainer>
                );
              })}
            </SimpleBarReact>
          </SecondaryWrapper>
          {/* -------------------------------------- */}
        </SecondaryContainer>
      </MainContainer>
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
  // const dev = process.env.NODE_ENV !== 'production';
  // const baseUrl = dev
  //     ? 'http://localhost:3000'
  //     : 'https://devrev-morocco.vercel.app';

  // const res = await fetch(`${baseUrl}/api/season/${params.season}`);
  // console.log('---------res--------', res)
  // const Episodes = await res.json();
  // console.log('---------Episodes--------', Episodes)

  const Episodes = { episodes: seasons[params.season] };

  return {
    props: {
      episodes: Episodes?.episodes ?? []
    }
  };
}

Season.propTypes = {
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

export default Season;
