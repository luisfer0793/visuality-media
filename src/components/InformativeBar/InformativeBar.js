import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faYoutube} from '@fortawesome/free-brands-svg-icons/faYoutube';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';

import ServicesBar from '../ServicesBar/ServicesBar';

import './InformativeBar.css';

const Icons = () => {
  const icons = [faFacebookSquare, faInstagram, faYoutube, faEnvelope];

  return (
    <ul>
      {icons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} className="informative-bar__icon"/>
      ))}
    </ul>
  );
};

const Info = () => {
  return (
    <ul className="info-list">
      <li className="info-list__item">CDMX <span className="informative-bar--bold">55 5298 8535</span></li>
      <li className="info-list__item">León, Gto <span className="informative-bar--bold">55 3839 6630</span></li>
      <li className="info-list__item informative-bar--bold">visuality.contacto@gmail.com</li>
    </ul>
  );
};

const InformativeBar = props => {
  return (
    <div className="informative-bar">
      <Info/>
      <Icons/>
      <ServicesBar/>
    </div>
  );
};

export default InformativeBar;