import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/views/_notFound.css';

const PageNotFound = () => (
  <div className="not-found">
    <h1>Page Not Found.</h1>
    <p>Return to <Link to="/">index</Link>.</p>
  </div>
);

export default PageNotFound;