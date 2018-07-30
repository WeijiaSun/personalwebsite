import React from 'react';
import { Link } from 'react-router-dom';

import App from '../App';

const Contact = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2>Contact</h2>
            <p>More ways to contect me to come. For now, you can check my resume <Link to="/resume">here</Link></p>
            </div>
        </header>
        </article>
    </App>
);

export default Contact;