import React from 'react';
import {
  WelcomeWrapper,
  Logo,
  Wrapper,
  LinkStyled,
  MainText,
  Description,
} from './Welcome.styled';

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Logo>Car Rental NYC</Logo>
      <Wrapper>
        <MainText>Explore the world with comfort and style!</MainText>
        <Description>
          Make the real your dream
        </Description>
        <LinkStyled to="/catalog">GO!</LinkStyled>
      </Wrapper>
    </WelcomeWrapper>
  );
};

export default Welcome;
