import React, { memo } from 'react';
import {
  Video_Container,
  VideoWrapper,
  VideoThumbnailContainer,
  VideoThumbnailWrapper,
  Inner_btn,
  Icon_btn,
  VideoContainer_Body_wrap,
  VideoContainer_body,
  VideoContainer_body_Title,
  VideoContainer_body_Details,
  Slider
} from './styles';
import PropTypes from 'prop-types';
import { Checked, Clock } from '../../components/svgs';
import { useMediaQuery } from '../../hooks';
import Link from 'next/link';

const VideoContainer = ({ Episode, Season, CurrentVidId, PlayingState }) => {
  const mediaQueryMatches = useMediaQuery('max-width', 735);

  const IswatchLater = false;

  const HandleLink = () => {};

  const isPlaying = PlayingState === 1;

  console.log('isPlaying :>> ', isPlaying);

  return (
    <Video_Container>
      <VideoWrapper>
        <VideoThumbnailContainer
          isVid={Episode?.videoId === CurrentVidId}
          isPlaying={isPlaying}
        >
          <VideoThumbnailWrapper onClick={HandleLink}>
            <img
              width={mediaQueryMatches ? '140' : '160'}
              src={Episode?.thumbnail}
              alt=""
            />
          </VideoThumbnailWrapper>
          {/* -------------head svg-------------- */}
          {Episode?.duration && (
            <Inner_btn className="inner_btn--duration">
              {Episode?.duration}
            </Inner_btn>
          )}
          <Inner_btn
            //   onClick={() =>
            //     PopularVideo
            //       ? HandleWLClick(
            //           PopularVideo.title,
            //           PopularVideo.duration,
            //           PopularVideo.videoId,
            //           PopularVideo.channelTitle,
            //           PopularVideo.channelId,
            //           PopularVideo.thumbnail,
            //           IswatchLater
            //         )
            //       : null
            //   }

            className="inner_btn--clock"
          >
            <Icon_btn

            // onMouseEnter={() => HandleHoverIn("wl")}
            // onMouseLeave={() => HandleHoverOut("wl")}
            // className={styles.icon_btn}
            >
              {IswatchLater ? (
                <div className="icon_btn__check">
                  <Checked />
                </div>
              ) : (
                <Clock />
              )}
            </Icon_btn>
            <Slider id={`wl-${Episode?.videoId}`}>
              {IswatchLater ? (
                <div className="slider__check">added</div>
              ) : (
                <div className="slider__normal">watch later</div>
              )}
            </Slider>
          </Inner_btn>
          {/* -------------body-------------- */}
        </VideoThumbnailContainer>
        <Link
          href={{
            pathname: `/season/[season]`,
            query: { season: Season, v: Episode.videoId }
          }}
          passHref
        >
          <VideoContainer_body as="a">
            <VideoContainer_Body_wrap>
              <VideoContainer_body_Title
              // onClick={HandleLink}
              >
                {Episode?.title}
              </VideoContainer_body_Title>
              <VideoContainer_body_Details>
                {Episode?.description[0]}
              </VideoContainer_body_Details>
            </VideoContainer_Body_wrap>
          </VideoContainer_body>
        </Link>
      </VideoWrapper>
    </Video_Container>
  );
};

VideoContainer.propTypes = {
  Season: PropTypes.string,
  CurrentVidId: PropTypes.string,
  PlayingState: PropTypes.number,
  Episode: PropTypes.shape({
    ep: PropTypes.number,
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string)
  })
};

export default memo(VideoContainer);
