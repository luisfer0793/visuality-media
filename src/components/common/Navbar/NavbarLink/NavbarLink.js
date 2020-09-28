import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({isActive, variant, children, ...props}) => (
  <RouterLink {...props}>
    {children}
  </RouterLink>
);

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 1.5rem;
  font-family: 'Panton', sans-serif;
  font-weight: ${ props => props.isActive ? 800 : 300 };
  font-size: 4rem;
  font-style: italic;
  text-transform: uppercase;
  text-decoration: none;
  color: ${ props => props.variant ? '#ffffff' : '#000000' };
  border-radius: 1rem 1rem 0 0;
  transition: background-color linear 250ms;
  &::after {
    position: absolute;
    width: 100%;
    height: 0.5rem;
    content: '';
    left: 0;
    bottom: -.3rem;
    z-index: 10;
    border-radius: 1rem;
    background-color: #ff4e10;
    opacity: 0;
    transition: opacity linear 250ms;
  }
  &:hover {
    background-color: ${ props => props.variant ? '#320f01' : '#f1cfc0' };
    &::after {
      opacity: 1;
    }
  }
`;

const LinkRef = React.forwardRef((props, ref) => (
  <StyledLink ref={ref} {...props} />
));

export default LinkRef;