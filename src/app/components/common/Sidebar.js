import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import socials from '../../data/socials'


const Sidebar = () => (
    <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo"><img src="/images/me.jpg" alt="" /></Link>
      <header>
        <h2>Weijia Sun</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, Internet. I am Weijia, a software engineer who resides in the lovely Austin, TX. I graduated with a computer science degree from University of Michigan,
        in addition to an electrical and computer engineering degree from Shanghai Jiao Tong University.
      </p>
      <ul className="actions">
        <li>
          <a className="button" href="__files/WeijiaSunP.pdf" target="_blank" rel="noopener noreferrer">Resume Download</a>
        </li>
      </ul>
      <ul className="icons">
        {socials.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
    </section>

    <section id="footer">
    </section>
  </section>
);

export default Sidebar;
