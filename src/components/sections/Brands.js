import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as AirbnbLogo } from '@images/logos/airbnb.svg';
import { ReactComponent as AppleMusicLogo } from '@images/logos/apple-music.svg';
import { ReactComponent as CokeLogo } from '@images/logos/coca-cola.svg';
import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';
import { ReactComponent as SoDelhiLogo } from '@images/logos/sodelhi.png';
// import * as SoDelhiLogo from '@images/logos/sodelhi.png';


const LOGOS = [
  {
    text:'Article & Blog Posts',
    logo: AirbnbLogo,
    link: 'https://airbnb.io',
  },
  {
    text:'Product Description',
    logo: AppleMusicLogo,
    link: 'https://www.apple.com/in/music/',
  },
  {
    text:'Product & UX/UI Copywriting',
    logo: CokeLogo,
    link: 'https://coca-cola.com',
  },
  {
    text:'Business Names & Slogan',
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  {
    text:'Scriptwriting',
    logo: NikeLogo,
    link: 'https://nike.com',
  },
  {
    text:'Creative Writing',
    logo: InstagramLogo,
    link: 'https://instagram.com',
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="services" accent>
        <StyledContainer>
          <div>
            <h1>Services</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link, text}) => (
                <ExternalLink key={link} href={link}>
                  {text}
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
