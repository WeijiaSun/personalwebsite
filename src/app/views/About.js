import React from 'react';
import { Link } from 'react-router-dom';

import App from '../App';

const About = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2>About Me</h2>
            <p>More details about me to come. For now, you can check my resume <Link to="/resume">here</Link></p>                        
            </div>
        </header>
        </article>
    </App>
);

export default About;
