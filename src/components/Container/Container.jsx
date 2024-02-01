import React from 'react';
import { useLocation } from 'react-router-dom';
import base from '../../assets/base.jpg';

const Container = ({ height, $paddingTop, children }) => {
  const location = useLocation();
  let backgroundImage = 'none';

  if (location.pathname === '/') {
    backgroundImage = `url(${base})`;
  }

  return (
    <div $backgroundImage={backgroundImage}>
      <div size={height} $paddingTop={$paddingTop}>
        {children}рпрпрпр
      </div>
    </div>
  );
};

export default Container;
