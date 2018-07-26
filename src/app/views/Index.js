import React from 'react';
import { Link } from 'react-router-dom';

import App from '../App';

const Index = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2><Link to="/">About this site</Link></h2>
            <p>A react app inspired by <a href="https://html5up.net/future-imperfect">Future Imperfect</a>.</p>
            </div>
        </header>
        <p> Hi there. </p> 
        <p> Please feel free to read more {' '}
            <Link to="/about">about me</Link>, view my {' '}
        <Link to="/resume">resume</Link>, check out the {' '}
        <Link to="/projects">projects</Link> I am/was part of, {' '}
        fulfill your craving for {' '}<Link to="/stats">numbers</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
        </p>
        <p> Source available <a href="https://github.com/WeijiaSun/personalwebsite">here</a>.</p>
        </article>
    </App>
);

export default Index;