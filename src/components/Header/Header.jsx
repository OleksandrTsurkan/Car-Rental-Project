import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderNav,
  Logo,
  MdCarRentalStyled,
  FaHeartStyled,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>Rental Budapest</Logo>
      </Link>
      <HeaderNav>
        <Link to="/advertisement">
          <MdCarRentalStyled />
        </Link>
        <Link to="/advertisement/favorites">
          <FaHeartStyled />
        </Link>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
