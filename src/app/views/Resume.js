import React from 'react';

import App from '../App';

const Resume = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2>Resume</h2>
            <p>Click <a href="__files/WeijiaSunP.pdf" target="_blank" rel="noopener noreferrer">here</a> for Resume</p>
            <div className="pdf"><embed src="__files/WeijiaSunP.pdf" width="900px" height="1150px" type='application/pdf'/> </div>
            </div>
        </header>
        </article>
    </App>
);

export default Resume;