import React, { useRef, memo } from 'react';
import {
  ParticipantThumbnail,
  ParticipantDetailsX,
  ParticipantDetailsLinkedIn,
  ParticipantContainer,
  ParticipantDetails,
  ParticipantDetailsThumbnail,
  ParticipantDetailsAbout,
  ParticipantDetailsName,
  ParticipantDetailsThumbnailContainer,
  ParticipantWrapper
} from './styles';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { LinkedIn, X } from '../../components/svgs';

const Profile = ({
  Id,
  imageUrl,
  Name,
  About,
  linkedIn,
  Index,
  ShowMore,
  setShowMore
}) => {
  const ShowMoreCache = useRef(null);

  ShowMoreCache.current = ShowMore;
  const IsParticipant = ShowMore === Id;

  const CloseDropMenu = (e) => {
    const PT = document.getElementById(`participant-${Id}`);
    if (!PT?.contains(e.target)) {
      document.removeEventListener('click', CloseDropMenu);
      setShowMore(null);
    }
  };

  const HandleClick = () => {
    if (ShowMoreCache.current === null)
      document.addEventListener('click', CloseDropMenu);
    setShowMore((prev) => (prev !== Id ? Id : null));
  };

  return (
    <ParticipantContainer SetMargin={!IsParticipant} Index={Index}>
      <ParticipantWrapper onClick={HandleClick} ShowMore={IsParticipant}>
        <ParticipantThumbnail
          DeferIndex={Index}
          data-content={Name}
          id={`participant-${Id}`}
          ShowMore={IsParticipant}
        >
          <Image quality={100} width={40} height={40} src={imageUrl} alt="" />
        </ParticipantThumbnail>
        <ParticipantDetails ShowMore={IsParticipant}>
          <ParticipantDetailsX>
            <X />
          </ParticipantDetailsX>
          <ParticipantDetailsThumbnailContainer>
            <ParticipantDetailsThumbnail>
              <Image
                quality={100}
                width={110}
                height={110}
                src={imageUrl}
                alt=""
              />
            </ParticipantDetailsThumbnail>
            <ParticipantDetailsName>{Name}</ParticipantDetailsName>
          </ParticipantDetailsThumbnailContainer>
          <ParticipantDetailsAbout>{About}</ParticipantDetailsAbout>
          <ParticipantDetailsLinkedIn>
            <Link href={linkedIn} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
            </Link>
          </ParticipantDetailsLinkedIn>
        </ParticipantDetails>
      </ParticipantWrapper>
    </ParticipantContainer>
  );
};

Profile.propTypes = {
  Index: PropTypes.number,
  Name: PropTypes.string,
  imageUrl: PropTypes.string,
  About: PropTypes.string,
  linkedIn: PropTypes.string,
  ShowMore: PropTypes.string,
  setShowMore: PropTypes.func,
  Id: PropTypes.string
};

export default memo(Profile);
