import React from 'react';
import Container from 'components/Container/Container';
import AdvertisementList from 'components/AdvertisementList/AdvertisementList';
import Filter from 'components/Filter/Filter';
import Header from 'components/Header/Header';

const Advertisement = () => {
  return (
    <>
      <Header />
      <Container>
        <Filter />
        <AdvertisementList />
      </Container>
    </>
  );
};

export default Advertisement;
