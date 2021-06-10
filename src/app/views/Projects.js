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
                <a href="https://www.delldesignsystem.com/" target="_blank" rel="noopener noreferrer" className="image"><img src="/images/dds.png" alt=""/></a>
            </article>
            <hr/>
            <article className="mini-post">
                <header>
                    <h3>Dell APEX Console</h3>
                </header>
                <a href="https://www.delltechnologies.com/en-us/apex/console.htm" target="_blank" rel="noopener noreferrer" className="image"><img src="/images/apex.png" alt=""/></a>
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

        <article className="post">
        <header>
            <div className="title">
            <h2>Some Fun Stuff</h2>
            </div>
        </header>
        <div className="cell-container">
            <article className="mini-post">
                <header>
                    <h3><a href="https://jeffbasils.com/" target="_blank" rel="noopener noreferrer">jeffbasils.com</a> &</h3>
                    <h3><a href="https://jeffbasil.com/" target="_blank" rel="noopener noreferrer">jeffbasil.com</a></h3>
                </header>
            </article>
        </div>
        </article>
    </App>
);

export default Projects;