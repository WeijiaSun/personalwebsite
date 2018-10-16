import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo"><img src="/images/me.jpg" alt="" /></Link>
      <header>
        <h2>Weijia Sun</h2>
        <p><a href="mailto:contact@sunweijia.com">contact@sunweijia.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Content on the way... {" "} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus sollicitudin nulla sodales mollis. Praesent eu pretium leo. Maecenas rutrum placerat gravida.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== '/resume'? <Link to="/resume" className="button">Learn More</Link> : null}
        </li>
      </ul>
    </section>

    <section id="footer">
    </section>
  </section>
);

export default Sidebar;
