import React from 'react';

import styled from 'styled-components';

import bgImage from 'assets/images/bg-hero.svg';

const StyledHero = styled.div`
  min-height: 100vh;
  background-image: url('../../../assets/images/bg-hero.svg');
  background-color: #0f0f0f;
  border-radius: 0 0 5rem 5rem;
`;

const Hero = ({ children }) => (
  <StyledHero>
    { children }
    <img src={bgImage} alt=""/>
  </StyledHero>
);

export default Hero;