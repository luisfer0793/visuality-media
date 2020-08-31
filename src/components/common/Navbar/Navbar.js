import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: space-between;
`;

const StyledList = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  &::after {
    position: absolute;
    width: 100%;
    height: .1rem;
    content: '';
    left: 0;
    bottom: 0;
    background-color: ${ props => props.ambient ? '#832804' : '#f8a47f' };
  }
`;

const StyledListItem = styled.li`
  margin-left: 2rem;
  margin-right: 2rem;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 1.5rem;
  font-weight: 300;
  font-size: 4rem;
  font-style: italic;
  text-transform: uppercase;
  text-decoration: none;
  color: ${ props => props.ambient === 'dark' ? '#ffffff' : '#000000' };
  border-radius: 1rem 1rem 0 0;
  transition: background-color linear 250ms;
  &::after {
    position: absolute;
    width: 100%;
    height: 0.3rem;
    content: '';
    left: 0;
    bottom: -.1rem;
    z-index: 10;
    border-radius: .1rem;
    background-color: #ff4e10;
    opacity: 0;
    transition: opacity linear 250ms;
  }
  &:hover {
    background-color: ${ props => props.ambient === 'dark' ? '#320f01' : '#f1cfc0' };
    &::after {
      opacity: 1;
    }
  }
`;

const Navbar = ({ links, ambient }) => {
  return (
    <StyledNavbar>
      <StyledList ambient={ambient}>
        {links.map(link => (
          <StyledListItem key={link.title}>
              <StyledLink to={link.to} ambient={ambient}>{link.title}</StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
      <img className="navbar__logo" src="../assets/images/navbar-logo.jpg" alt="navbar-logo"/>
    </StyledNavbar>
  );
};

export default Navbar;