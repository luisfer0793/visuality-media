import React from 'react';

import styled from 'styled-components';

import bgImage from 'assets/images/bg-hero.svg';

const StyledHero = styled.div`
  padding: 4.5rem;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-color: #161616;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Hero = ({children}) => (
  <StyledHero>
    {children}
  </StyledHero>
);

export default Hero;