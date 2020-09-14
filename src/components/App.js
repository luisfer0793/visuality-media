import React, { useState }from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Button from 'components/common/Button/Button';
import Navbar from 'components/common/Navbar/Navbar';
import InformativeBar from 'components/common/InformativeBar/InformativeBar';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .App {
    min-height: 100vh;
    padding: 3rem 4rem;
    background-color: #000000;
  }

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
  const [links, setLinks] = useState([
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
  ]);

  return (
    <Router>
      <GlobalStyle/>
      <main className="App">
        <header className="AppInformativeBar">
          <InformativeBar />
        </header>
        <Navbar links={links} isDark="true"/>
        <section className="AppHeadingSection">
          <div className="AppHeadingContainer">
            <p className="AppHeading">¿A qué mercado del mundo quieres llegar?</p>
            <p className="AppHeading AppHeadingBold">Somos estrategas del marketing listos para volar.</p>
          </div>
          <Button text="Custom Flight" small="true"/>
        </section>
      </main>
    </Router>
  );
};

export default App;
