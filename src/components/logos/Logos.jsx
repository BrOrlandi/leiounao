import React from 'react';
import styles from './Logos.module.scss';
import logoYD from '../../images/logo-yd.svg';
import anarcoze from '../../images/logo-anarcoze.png';
import { ydLink, anarcozeTwitter } from '../../constants/links';

function Logos() {
  return (
    <div className={styles.logos}>
      <a href={anarcozeTwitter} target="_blank" rel="noopener noreferrer">
        <img data-test="anarcoze" src={anarcoze} title="Anarcoze" alt="Anarcoze" />
      </a>

      <a href={ydLink} target="_blank" rel="noopener noreferrer">
        <img data-test="yuri-delgado" src={logoYD} title="Yuri Delgado" alt="Yuri Delgado" />
      </a>
    </div>
  )
}

export default Logos;
