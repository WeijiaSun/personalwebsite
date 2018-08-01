import React from 'react';
import { Link } from 'react-router-dom';

import App from '../App';

const Projects = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2>Projects</h2>
            </div>
        </header>
        <p>More details about my current/past projects to come. For now, you can check my resume <Link to="/resume">here</Link></p>            
        </article>
    </App>
);

export default Projects;