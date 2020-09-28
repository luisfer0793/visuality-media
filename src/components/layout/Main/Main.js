import React from 'react';

import Button from 'components/common/Button/Button';

const Main = props => (
  <main className="App">
    <section className="AppHeadingSection">
      <div className="AppHeadingContainer">
        <p className="AppHeading">¿A qué mercado del mundo quieres llegar?</p>
        <p className="AppHeading AppHeadingBold">Somos estrategas del marketing listos para volar.</p>
      </div>
      <Button text="Volar" />
    </section>
  </main>
);

export default Main;