import React, { useState } from 'react';
import { getAdverts, getStatusFilter } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Card from 'components/Card';
import { AdvertisementListStyled, ButtonStyled } from './AdvertisementList.styled';
import { loadMoreAdverts } from '../../redux/advertsSlice';

const AdvertisementList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);
  const filtered = useSelector(getStatusFilter);
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const visibleAdverts =
    filtered.length === 0
      ? adverts.slice(0, endIdx)
      : filtered.slice(0, endIdx);

  const handleLoadMore = () => {
    dispatch(loadMoreAdverts(page + 1));
    setPage(page + 1);
  };

  return (
    <AdvertisementListStyled>
      {visibleAdverts.map(advertisement => (
        <Card key={uuidv4()} advertisement={advertisement} />
      ))}
      {visibleAdverts.length < adverts.length && (
        <ButtonStyled onClick={handleLoadMore}>Load more</ButtonStyled>
      )}
    </AdvertisementListStyled>
  );
};

export default AdvertisementList;
