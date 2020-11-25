import React from 'react';
import { SectionContainer } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const FeaturedEpisodes = ({ Episodes }) => {
  return (
    <SectionContainer as="section">
      <div className="section-title">Featured Episodes</div>
      <div className="section-items-container video_section">
        {Episodes &&
          Episodes?.map((ep, idx) => {
            return (
              <Link key={idx} href={ep?.url} passHref>
                <a className="featured_video_container">
                  <div className="video_wrapper">
                    <div className="video_thumbnail_container">
                      <div className="video_thumbnail_wrapper">
                        <Image
                          src={ep?.thumbnail}
                          width={300}
                          height={(300 * 9) / 16}
                          quality={95}
                        />
                      </div>
                    </div>
                    <div className="video_body_container">
                      <div className="video_body_title">{ep?.title}</div>
                      <div className="video_body_description">
                        {ep?.description}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
      </div>
    </SectionContainer>
  );
};

FeaturedEpisodes.propTypes = {
  Episodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string
    })
  )
};

export default FeaturedEpisodes;
