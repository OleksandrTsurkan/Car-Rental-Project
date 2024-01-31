import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ padding, children }) => {
  return (
    <ButtonStyled $padding={padding} type="button">
      {' '}
      {children}
    </ButtonStyled>
  );
};

export default Button;
