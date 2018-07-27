import React from 'react';

import App from '../App';

import Numbers from '../components/stats/Numbers';

const Stats = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2>Stats</h2>
            </div>
        </header>
        <table>
            <tbody>
                <tr>
                    <td width="70%">Age</td>
                    <td><Numbers /></td>   
                </tr>
            </tbody>
        </table>
        </article>
    </App>
);

export default Stats;