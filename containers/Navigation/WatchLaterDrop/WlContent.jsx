import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Timer } from '../../../utils';
import Image from 'next/image';
import { WlContentContainer, WLRemoveBtn, WLMinDescription } from './style';
import {
  Video_Container,
  VideoWrapper,
  VideoThumbnailContainer,
  VideoThumbnailWrapper,
  Inner_btn,
  VideoContainer_Body_wrap,
  VideoContainer_body,
  VideoContainer_body_Title
} from '../../VideoContainer/styles';
import { useWL } from '../../../hooks';
import { useRouter } from 'next/router';

const SimpleBarReact = dynamic(() => import('simplebar-react'), {
  // eslint-disable-next-line react/display-name
  loading: () => <div></div>
});

const WlContent = () => {
  const Router = useRouter();

  const [AnimationActiveIn, setAnimationActiveIn] = useState(null);

  const [StoredValue, setLocalStorage] = useWL();

  const HandleRemove = (videoId) => {
    setAnimationActiveIn(videoId);
    Timer(400).then(() => {
      setAnimationActiveIn(null);
      const NewWlList = StoredValue?.wl.filter((ep) => {
        return ep?.videoId !== videoId;
      });
      setLocalStorage({ wl: [...(NewWlList ?? [])] });
    });
  };

  const HandleClick = (e, season, episode, videoId) => {
    if (e.target.id === 'wl-del-btn') {
      HandleRemove(videoId);
      return null;
    } else {
      window?.scrollTo({ top: 0, behavior: 'smooth' });
      Router.push({
        pathname: `/playlist/[season]/[episode]`,
        query: { season, episode }
      });
    }
  };

  return (
    <SimpleBarReact style={{ maxHeight: 'inherit', padding: '5px' }}>
      {StoredValue?.wl.map((Episode) => {
        return (
          <WlContentContainer
            className={
              AnimationActiveIn === Episode.videoId ? 'slide-removal' : null
            }
            key={Episode.videoId}
          >
            <Video_Container
              onClick={(e) =>
                HandleClick(
                  e,
                  Episode?.season,
                  Episode?.stringUrl,
                  Episode?.videoId
                )
              }
              tabIndex={0}
              onKeyPress={(e) =>
                HandleClick(
                  e,
                  Episode?.season,
                  Episode?.stringUrl,
                  Episode?.videoId
                )
              }
            >
              <VideoWrapper>
                <VideoThumbnailContainer Width={110}>
                  <VideoThumbnailWrapper Width={110}>
                    <Image
                      src={Episode?.thumbnail}
                      width={110}
                      height={(110 * 9) / 16}
                      quality={100}
                    />
                  </VideoThumbnailWrapper>
                  <Inner_btn
                    style={{ fontSize: '.65em' }}
                    className="inner_btn--duration"
                  >
                    {Episode?.duration?.toHHMMSS() ?? ''}
                  </Inner_btn>
                </VideoThumbnailContainer>
                <VideoContainer_body as="div">
                  <VideoContainer_Body_wrap>
                    <VideoContainer_body_Title style={{ fontSize: '.85em' }}>
                      {Episode?.title}
                    </VideoContainer_body_Title>
                    <WLMinDescription>{Episode?.description}</WLMinDescription>
                    <WLRemoveBtn role="button" id="wl-del-btn" tabIndex={0}>
                      Remove
                    </WLRemoveBtn>
                  </VideoContainer_Body_wrap>
                </VideoContainer_body>
              </VideoWrapper>
            </Video_Container>
          </WlContentContainer>
        );
      })}
    </SimpleBarReact>
  );
};

export default WlContent;
