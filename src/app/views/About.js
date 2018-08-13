import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import App from '../App';

import aboutmd from '../data/about.md'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: null,
    };
  }

  componentWillMount() {
    fetch(aboutmd).then((response) => response.text()).then((text) => {
      this.setState({ markdown: text })
    })
  }

  render() {
    return (
        <App>
            <article className="post" id="index">
            <header>
                <div className="title">
                <h2>About Me</h2>                 
                </div>
            </header>
            <p>react-markdown connected, content on the way. For now, you can check my resume <Link to="/resume">here</Link></p> 
            <p>Here is a sample rendered markdown file.</p> 
            <br />
            <div className="cell-container">
                <ReactMarkdown
                    source={this.state.markdown}
                    escapeHtml={false}
                />  
            </div>                                                          
            </article>
        </App>
    );
  }
}

export default About;
