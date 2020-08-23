import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

const links = [
  { 
    title: 'Recepción', 
    to: '/recepcion' 
  }, 
  { 
    title: 'Logo', 
    to: '/home' 
  }, 
  { 
    title: 'Adventure', 
    to: '/adventure' 
  }, 
  { 
    title: 'Blog', 
    to: '/blog' 
  }, 
  { 
    title: 'Shop', 
    to: '/shop' 
  }, 
];

const Navbar = props => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {links.map(link => (
          <li key={link.title} className="navbar__list-item">
            <Link className="navbar__list-link" to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <img className="navbar__logo" src="../assets/images/navbar-logo.jpg" alt="navbar-logo"/>
    </nav>
  );
};

export default Navbar;