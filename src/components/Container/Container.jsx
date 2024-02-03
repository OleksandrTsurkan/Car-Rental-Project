import React from 'react';
import { useLocation } from 'react-router-dom';
import { SectionStyled, ContainerStyled } from './Container.styled';
import base from '../../assets/base.jpg';

const Container = ({ height, $paddingTop, children }) => {
  const location = useLocation();
  let backgroundImage = 'none';

  if (location.pathname === '/') {
    backgroundImage = `url(${base})`;
  }

  return (
    <SectionStyled $backgroundImage={backgroundImage}>
      <ContainerStyled size={height} $paddingTop={$paddingTop}>
        {children}
      </ContainerStyled>
    </SectionStyled>
  );
};

export default Container;
