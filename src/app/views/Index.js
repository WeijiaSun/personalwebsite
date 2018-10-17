import React from 'react';
import { Link } from 'react-router-dom';

import App from '../App';

const Index = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2>About this site</h2>
            <p>A react app inspired by <a href="https://html5up.net/future-imperfect" target="_blank" rel="noopener noreferrer">Future Imperfect</a>.</p>
            </div>
        </header>
        <p> Hi there. </p> 
        <p> Please feel free to {' '} 
            {/* read more {' '}
            <Link to="/about">about me</Link>,  */}
            view my {' '}
        <a href="__files/WeijiaSunP.pdf" target="_blank" rel="noopener noreferrer">resume</a>, check out the {' '}
        <Link to="/projects">projects</Link> I am/was part of, {' '}
        fulfill your craving for {' '}<Link to="/stats">numbers</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
        </p>
        <p> Source available <a href="https://github.com/WeijiaSun/personalwebsite" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </article>
    </App>
);

export default Index;