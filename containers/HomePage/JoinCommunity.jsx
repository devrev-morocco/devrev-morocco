import React from 'react';
import Link from 'next/link';
import {
  JoinCommunityContainer,
  Illustration_Container,
  ShowcaseContainer,
  IconsShowcaseContainer,
  IconShowcase
} from './styles';
import {
  HeyCommunity,
  YouTubeSvg,
  FacebookSvg,
  TwitchSvg,
  InstagramSvg,
  RedditSvg,
  TwitterSvg
} from '../../components/svgs';

const JoinCommunity = () => {
  return (
    <JoinCommunityContainer as="section">
      <Illustration_Container>
        <HeyCommunity />
      </Illustration_Container>
      <ShowcaseContainer>
        <h1 className="Showcase-title">Join The Community</h1>
        <IconsShowcaseContainer as="ul" className="icons_Showcase_container">
          <IconShowcase as="li">
            <Link
              href="https://www.youtube.com/channel/UCohUHFN_a54IJz2qVSEgf4g"
              passHref
            >
              <a rel="noreferrer" target="_blank" className="icon_wrap icon-yt">
                <YouTubeSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.facebook.com/devrevmorocco/" passHref>
              <a rel="noreferrer" target="_blank" className="icon_wrap">
                <FacebookSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://twitch.com/devrevmorocco" passHref>
              <a rel="noreferrer" target="_blank" className="icon_wrap icon-tw">
                <TwitchSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.instagram.com/devrevmorocco/" passHref>
              <a rel="noreferrer" target="_blank" className="icon_wrap">
                <InstagramSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://www.reddit.com/r/DevRevMorocco/" passHref>
              <a rel="noreferrer" target="_blank" className="icon_wrap">
                <RedditSvg />
              </a>
            </Link>
          </IconShowcase>
          <IconShowcase as="li">
            <Link href="https://twitter.com/devrevmorocco" passHref>
              <a rel="noreferrer" target="_blank" className="icon_wrap">
                <TwitterSvg />
              </a>
            </Link>
          </IconShowcase>
        </IconsShowcaseContainer>
      </ShowcaseContainer>
    </JoinCommunityContainer>
  );
};

export default JoinCommunity;
