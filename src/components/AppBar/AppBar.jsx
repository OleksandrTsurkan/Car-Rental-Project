import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div>
      <Link to={'/'}>Car Rent</Link>
      <nav>
        <Link to={'/advertisement'}>Advertisement</Link>
        <Link to={'/advertisement/favorites'}>Favorites</Link>
      </nav>
    </div>
  );
};

export default AppBar;
