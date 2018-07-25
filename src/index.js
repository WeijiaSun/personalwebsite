import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

//Custom imports
import About from './app/views/About';
import Projects from './app/views/Projects';
import Resume from './app/views/Resume';
import Stats from './app/views/Stats';
import Contact from './app/views/Contact';
import NotFound from './app/views/NotFound';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
