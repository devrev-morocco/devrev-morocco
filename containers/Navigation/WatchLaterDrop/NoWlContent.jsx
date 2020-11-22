import React from 'react';
import {
  WlNoResultsWrapper,
  WlNoResultsContainer,
  WlNoResultsHeader
} from './style';

const NoWlContent = () => {
  return (
    <WlNoResultsContainer>
      <WlNoResultsWrapper>
        <WlNoResultsHeader>Your watch later queue is empty</WlNoResultsHeader>
        <div style={{ width: '50%' }} className="separator"></div>
        <p
          style={{
            margin: '10px 20px',
            fontSize: '0.85em'
          }}
        >
          Hover over a video thumbnail and then click on the “Watch Later”
          button (it has a Clock icon). The video will be instantly added to
          your Watch Later queue.
        </p>
      </WlNoResultsWrapper>
    </WlNoResultsContainer>
  );
};

export default NoWlContent;
