import React from 'react';
import styled from 'styled-components';

const StyledServicesBar = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const StyledServicesBarItem = styled.li`
  position: relative;
  padding: 0 1rem;
  font-style: italic;
  color: #ffffff;
  &:not(:first-child)::before {
    position: absolute;
    content: '';
    top: 45%;
    left: 0;
    height: .3rem;
    width: .3rem;
    border-radius: .5rem;
    background-color: #FF4E10;
  }
`;

const services = ['diseño', 'video', 'redes sociales', 'marketing digital', 'estrategia'];

const ServicesBar = props => (
  <StyledServicesBar>
    {services.map(service => (
      <StyledServicesBarItem key={service}>
        {service}
      </StyledServicesBarItem>
    ))}
  </StyledServicesBar>
);

export default ServicesBar;