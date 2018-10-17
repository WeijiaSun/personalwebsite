import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import App from '../App';
import socials from '../data/socials'

const Contact = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
                <h2>Contact</h2>
            </div>
        </header>
        <p>You can reach me at literally almost anything @sunweijia.com. </p>
        <p>For example, {' '} 
            <a href='mailto:literally-almost-anything@sunweijia.com'>
                literally-almost-anything@sunweijia.com
            </a> or {' '}
            <a href='mailto:some-other-random-string@sunweijia.com'>
                some-other-random-string@sunweijia.com
            </a>
        </p>
        <br/>
        <ul className="icons">
            {socials.map(s => (
              <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
            ))}
        </ul>
        </article>
    </App>
);

export default Contact;