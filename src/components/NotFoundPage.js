import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
    To Edit pass the parameter
  </div>
);

export default NotFoundPage;