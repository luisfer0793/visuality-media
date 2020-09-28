import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from 'components/common/Navbar/Navbar';
import Hero from 'components/layout/Hero/Hero';
import Main from 'components/layout/Main/Main'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .AppHeading {
    font-weight: 300;
    font-size: 4rem;
    font-style: italic;
  }

  .AppHeadingBold {
    padding: 1.5rem 0 0 5rem;
    font-weight: 600;
  } 

  .AppHeadingSection {
    display: flex;
    padding: 10rem 0;
    align-items: center;
    color: #ffffff;
  }

  .AppHeadingContainer {
    padding: 0 5rem;
    margin-right: 30rem;
  }

  .AppInformativeBar {
    margin-bottom: 3rem;
  }
`;

const App = props => {
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
      title: 'Apoyo Social', 
      to: '/apoyo-social' 
    }, 
    { 
      title: 'Proyectos', 
      to: '/proyectos' 
    }, 
    { 
      title: 'Blog', 
      to: '/blog' 
    },
  ];

  return (
    <Router>
      <GlobalStyle />
      <Hero>
        <Navbar 
          links={links} 
          variant="dark"
        />
        <Main/>
      </Hero>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, quisquam dolores laborum aliquam quaerat quas eos fuga ea nesciunt rem quam corrupti. Placeat ducimus, ex maxime voluptate quibusdam, suscipit possimus doloribus alias fuga maiores dolores! Blanditiis, quaerat. Quidem ad voluptas, esse iusto, amet dolorum eaque dolores, sunt ex repellendus reprehenderit!</p>
    </Router>
  );
};

export default App;
