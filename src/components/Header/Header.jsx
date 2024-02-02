import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderNav,
  Logo,
  MdCarRentalStyled,
  AiTwotoneRocketStyled,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>Rental NYC</Logo>
      </Link>
      <HeaderNav>
        <Link to="/catalog">
          <MdCarRentalStyled />
        </Link>
        <Link to="/favorites">
          <AiTwotoneRocketStyled />
        </Link>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
