import React from 'react';

import './ServicesBar.css';

const services = ['design', 'video', 'media', 'mkt', 'strategist', 'magicians'];

const ServicesBar = props => {
  return (
    <ul className="services-bar">
      {services.map(service => (
        <li key={service} className="services-bar__item">
          {service}
        </li>
      ))}
    </ul>
  );
};

export default ServicesBar;