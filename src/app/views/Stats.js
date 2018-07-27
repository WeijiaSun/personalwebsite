import React from 'react';

import App from '../App';

import Age from '../components/stats/Age';

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
                    <td><Age /></td>   
                </tr>
                <tr>
                    <td width="70%">Miles I have driven since licensed at 21st birthday</td>
                    <td>{(124200 + ((Date.now() - new Date('2018-07-26T00:00:00')) / (24 * 60 * 60 *1000)) * 40).toFixed(0)}</td>   
                </tr>
            </tbody>
        </table>
        </article>
    </App>
);

export default Stats;