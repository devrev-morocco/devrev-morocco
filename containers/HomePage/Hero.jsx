import React from 'react';
import Link from 'next/link';
import { HologramSvg } from '../../components/svgs';
import {
  HeroContainer,
  DescriptionContainer,
  HoloSvgContainer,
  H1,
  H2,
  HeroButtonContainer,
  HeroButtonWrap
} from './styles';

const Hero = () => {
  return (
    <HeroContainer as="section">
      <DescriptionContainer>
        <H1>DevRev Morocco</H1>
        <H2>
          A weekly live show featuring conversations with great tech minds about
          software engineering, tech careers, and startups.
        </H2>
        <Link href="/playlist/1/devrev-1" passHref>
          <HeroButtonWrap>
            <HeroButtonContainer>
              <div className="play-btn-event-horizon"></div>
              Explore Episodes
            </HeroButtonContainer>
          </HeroButtonWrap>
        </Link>
      </DescriptionContainer>
      <HoloSvgContainer>
        <HologramSvg />
      </HoloSvgContainer>
    </HeroContainer>
  );
};

export default Hero;
