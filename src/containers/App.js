import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Button from '../components/Button/Button';
import Navbar from '../components/Navbar/Navbar';
import InformativeBar from '../components/InformativeBar/InformativeBar';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <main className="App">
          <header className="AppInformativeBar">
            <InformativeBar />
          </header>
          <Navbar/>
          <section className="AppHeadingSection">
            <div className="AppHeadingContainer">
              <p className="AppHeading">¿A qué mercado del mundo quieres llegar?</p>
              <p className="AppHeading AppHeadingBold">Somos estrategas del marketing listos para volar.</p>
            </div>
            <Button text="Custom Flight"/>
          </section>
        </main>
      </Router>
    );
  }
}

export default App;
