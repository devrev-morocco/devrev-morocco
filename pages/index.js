import React from 'react';
import { PageContainer, HeroContainer } from '../styles/Pages/index';
import {
  Hero,
  LiveSection,
  FeaturedEpisodes,
  JoinCommunity,
  MiniFooter
} from '../containers';
import PropTypes from 'prop-types';
export default function Home({ Featured_episodes }) {
  return (
    <PageContainer>
      <HeroContainer>
        <Hero />
        <div className="horizontal-line"></div>
        <LiveSection />
        <div className="horizontal-line"></div>
        <FeaturedEpisodes Episodes={Featured_episodes} />
        <div className="horizontal-line"></div>
        <JoinCommunity />
      </HeroContainer>
      <MiniFooter />
    </PageContainer>
  );
}

export async function getStaticProps() {
  const { episodes } = require('../data/FeaturedEpisodes.json');
  const { seasons } = require('../data/Seasons.json');

  const Featured_episodes = [];

  episodes.forEach((ep) => {
    const Fep = seasons[ep.season].filter((episode) => {
      return episode.ep === ep.ep;
    });
    Featured_episodes.push({
      title: `DevRev #${Fep[0].stringUrl?.split('-')[1]} | ${Fep[0].title}`,
      thumbnail: Fep[0].thumbnail,
      description: Fep[0].description[0],
      url: `/playlist/${Fep[0].season}/${Fep[0].stringUrl}`
    });
  });

  return {
    props: {
      Featured_episodes
    }
  };
}
Home.propTypes = {
  Featured_episodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string
    })
  )
};
