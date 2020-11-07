import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import logoComplete from 'assets/images/logo-complete-white.svg';

import LinkRef from 'components/common/Navbar/NavbarLink/NavbarLink';

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
    background-color: ${ props => props.variant ? '#832804' : '#f8a47f' };
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

const Navbar = ({ links, variant }) => {
  const {pathname} = useLocation();

  return (
    <StyledNavbar>
      <StyledList variant={variant}>
        {links.map(link => (
          <StyledListItem key={link.title}>
              <LinkRef to={link.to} variant={variant} isActive={pathname === link.to}>
                {link.title}
              </LinkRef>
          </StyledListItem>
        ))}
      </StyledList>
      <img className="navbar__logo" src={logoComplete} alt="navbar-logo"/>
    </StyledNavbar>
  );
};

export default Navbar;