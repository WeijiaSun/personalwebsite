import React from 'react';

import App from '../App';

const Projects = () => (
    <App>
        <article className="post">
        <header>
            <div className="title">
            <h2>Projects</h2>
            </div>
        </header>
        <div className="cell-container">
            <article className="mini-post">
                <header>
                    <h3>Dell Design System</h3>
                </header>
                <a href="http://uicore-server-020.apps.cus.koaplatform.io/" target="_blank" rel="noopener noreferrer" className="image"><img src="/images/dds.png" alt=""/></a>
            </article>
            <hr/>
            <article className="mini-post">
                <header>
                    <h3>Dell Standard Price List</h3>
                </header>
                <a href="https://channel.dell.com/spl/products" target="_blank" rel="noopener noreferrer" className="image"><img src="/images/spl.png" alt=""/></a>
            </article>
        </div>
        </article>
    </App>
);

export default Projects;