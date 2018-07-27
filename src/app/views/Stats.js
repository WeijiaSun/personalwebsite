import React from 'react';

import App from '../App';

import Age from '../components/stats/Age';

const Stats = () => (
    <App>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2>Stats</h2>
            <p>Numbers? Anyone?</p>
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
                    <td>{(124200 + ((Date.now() - new Date('2018-07-26T00:00:00')) / (24 * 60 * 60 *1000)) * 96).toFixed(0)}</td>   
                </tr>
                <tr>
                    <td width="70%"><a href="https://www.amcharts.com/visited_states/#US-AK,US-AL,US-AR,US-AZ,US-CA,US-CO,US-CT,US-DC,US-DE,US-FL,US-GA,US-HI,US-IL,US-IN,US-KS,US-KY,US-LA,US-MA,US-MD,US-MI,US-MN,US-MO,US-MS,US-NC,US-NE,US-NJ,US-NM,US-NV,US-NY,US-OH,US-OK,US-PA,US-TN,US-TX,US-UT,US-VA,US-WA,US-WY">
                    States</a> I have been to</td>
                    <td><a href="https://www.amcharts.com/visited_states/#US-AK,US-AL,US-AR,US-AZ,US-CA,US-CO,US-CT,US-DC,US-DE,US-FL,US-GA,US-HI,US-IL,US-IN,US-KS,US-KY,US-LA,US-MA,US-MD,US-MI,US-MN,US-MO,US-MS,US-NC,US-NE,US-NJ,US-NM,US-NV,US-NY,US-OH,US-OK,US-PA,US-TN,US-TX,US-UT,US-VA,US-WA,US-WY">
                    37</a></td>   
                </tr>
            </tbody>
        </table>
        </article>
    </App>
);

export default Stats;