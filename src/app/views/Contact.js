import React from 'react';

import App from '../App';

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
        </article>
    </App>
);

export default Contact;