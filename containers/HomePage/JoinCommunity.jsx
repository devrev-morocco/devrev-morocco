import React from 'react';
import Link from 'next/link';
import {
  JoinCommunityContainer,
  ShowcaseContainer,
  IconsShowcaseContainer,
  IconShowcase
} from './styles';
import {
  YouTubeSvg,
  FacebookSvg,
  TwitchSvg,
  InstagramSvg,
  RedditSvg,
  TwitterSvg,
  SpotifySvg
} from '../../components/svgs';

const JoinCommunity = () => {
  return (
    <JoinCommunityContainer as="section">
      <ShowcaseContainer>
        <h1 className="Showcase-title">Join The Community</h1>
        <div className="Showcase-line"></div>
        <IconsShowcaseContainer as="ul" className="icons_Showcase_container">
          <IconShowcase as="li">
            <Link
              href="https://www.youtube.com/channel/UCohUHFN_a54IJz2qVSEgf4g"
              passHref
            >
              <a
                aria-label="YouTube"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap icon-yt"
              >
                <YouTubeSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.facebook.com/devrevmorocco/" passHref>
              <a
                aria-label="Facebook"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <FacebookSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://twitch.com/devrevmorocco" passHref>
              <a
                aria-label="Twitch"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap icon-tw"
              >
                <TwitchSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.instagram.com/devrevmorocco/" passHref>
              <a
                aria-label="Instagram"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <InstagramSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.reddit.com/r/DevRevMorocco/" passHref>
              <a
                aria-label="Reddit"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <RedditSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://twitter.com/devrevmorocco" passHref>
              <a
                aria-label="Twitter"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <TwitterSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link
              href="https://open.spotify.com/show/2AEvg78E02j5Kux9ncQwUH"
              passHref
            >
              <a
                aria-label="Spotify"
                rel="noreferrer"
                target="_blank"
                className="icon_wrap"
              >
                <SpotifySvg />
              </a>
            </Link>
          </IconShowcase>
        </IconsShowcaseContainer>
      </ShowcaseContainer>
    </JoinCommunityContainer>
  );
};

export default JoinCommunity;
