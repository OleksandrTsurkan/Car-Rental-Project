import React from 'react';
import { ButtonStyled } from './ButtomStyled';

const Button = ({ padding, children }) => {
  return (
    <ButtonStyled $padding={padding} type="button">
      {' '}
      {children}
    </ButtonStyled>
  );
};

export default Button;
