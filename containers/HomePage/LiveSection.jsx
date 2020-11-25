import React from 'react';
import { SectionContainer } from './styles';
import Link from 'next/link';
import { YouTubeSvg, FacebookSvg, TwitchSvg } from '../../components/svgs';

const LiveSection = () => {
  return (
    <SectionContainer as="section">
      <h1 className="section-title">How To Watch Live</h1>
      <div className="section-date">Every Wednesday at 8pm (UTC+1)</div>
      <div className="section-items-container">
        <Link
          href="https://www.youtube.com/channel/UCohUHFN_a54IJz2qVSEgf4g"
          passHref
        >
          <a
            aria-label="Live on YouTube"
            rel="noreferrer"
            target="_blank"
            className="social_item_wrap tooltip--yt"
          >
            <div className="tooltip">Live on YouTube</div>
            <div className="social-icon">
              <YouTubeSvg />
            </div>
          </a>
        </Link>
        <Link href="https://www.facebook.com/devrevmorocco/" passHref>
          <a
            aria-label="Live on Facebook"
            rel="noreferrer"
            target="_blank"
            className="social_item_wrap tooltip--fb"
          >
            <div className="tooltip">Live on Facebook</div>
            <div className="social-icon">
              <FacebookSvg />
            </div>
          </a>
        </Link>
        <Link href="https://twitch.com/devrevmorocco" passHref>
          <a
            aria-label="Live on Twitch"
            rel="noreferrer"
            target="_blank"
            className="social_item_wrap tooltip--tw"
          >
            <div className="tooltip">Live on Twitch</div>
            <div rel="noreferrer" target="_blank" className="social-icon">
              <TwitchSvg />
            </div>
          </a>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default LiveSection;
