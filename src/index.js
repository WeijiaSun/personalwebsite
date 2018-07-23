import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

//Custom imports
import NotFound from './app/views/NotFound';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/testroute" exact component={App} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
