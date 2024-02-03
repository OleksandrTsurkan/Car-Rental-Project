import React, { useState, useEffect } from 'react';
import {
  CardWrapper,
  ImgWrapper,
  Img,
  FavoriteImg,
  NoFavoriteImg,
  ButtonFavorite,
  DescriptionWrapper,
  MainTextWrapper,
  MainText,
  InfoWrapper,
  Info,
  NoImage,
  LinkButton,
} from './Card.styled';
import getSplitArray from 'helpers/getSplitArray';
import sprite from '../../assets/sprite.svg';
import Modal from 'components/Modal';
import CardFull from 'components/CardFull';
import { getFavorites, getAdverts } from '../../redux/selectors';
import { addFavorite, deleteFavorite } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoriteIcon } from '../../redux/favoriteSlice';
const Card = ({ advertisement }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = advertisement;
  const favorites = useSelector(getFavorites);
  const adverts = useSelector(getAdverts);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [localIsFavorite, setLocalIsFavorite] = useState(false);
  // const isFavorite = favorites.some(object => object.id === id);

  const isFavorite = useSelector(state => {
    const favorite = state.favorites.items.find(object => object.id === id);
    return !!favorite;
  });

  useEffect(() => {
    console.log('localIsFavorite:', localIsFavorite);
    console.log('isFavorite:', isFavorite);
  }, [localIsFavorite, isFavorite]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  useEffect(() => {
    setLocalIsFavorite(isFavorite);
  }, [isFavorite]);

  let spliterForAddress = ', ';
  let addressArray = getSplitArray(address, spliterForAddress);

 
  const handleFavorite = () => {
    const favorite = favorites.find(object => object.id === id);
    const advert = adverts.find(object => object.id === id);
    if (!favorite) {
      dispatch(addFavorite(advert)).then(() => {
        dispatch(setFavoriteIcon({ id, isFavorite: true }));
        setLocalIsFavorite(true);
      });
    } else {
      dispatch(deleteFavorite(favorite.id)).then(() => {
        dispatch(setFavoriteIcon({ id, isFavorite: false }));
        setLocalIsFavorite(false);
      });
    }
  };
  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={img} loading="lazy" alt={make} title={description} />
        <NoImage>
          <use href={`${sprite}#icon-car`} />
        </NoImage>
      </ImgWrapper>

      <ButtonFavorite type="button" onClick={handleFavorite}>
        {localIsFavorite ? (
          <FavoriteImg>
            <use href={`${sprite}#icon-favorite`} />
          </FavoriteImg>
        ) : (
          <NoFavoriteImg>
            <use href={`${sprite}#icon-nofavorite`} />
          </NoFavoriteImg>
        )}
      </ButtonFavorite>
      <DescriptionWrapper>
        <MainTextWrapper>
          <MainText>
            {make}
            {model === 'Enclave' || model === 'XC90' || model === 'XC60' ? (
              <span>&nbsp;{model}</span>
            ) : null}
            ,&nbsp;{year}
          </MainText>
          <MainText>{rentalPrice}</MainText>
        </MainTextWrapper>
        <InfoWrapper>
          <Info>{addressArray[1]}</Info>
          <Info>{addressArray[2]}</Info>

          {rentalCompany === 'Premium Auto Rentals' ? (
            <Info>Auto Rentals</Info>
          ) : (
            <Info>{rentalCompany}</Info>
          )}

          {id === '9587' || id === '9597' || id === '9598' ? null : (
            <Info>Premium</Info>
          )}
        </InfoWrapper>
        <InfoWrapper>
          <Info>{type}</Info>
          <Info>{model}</Info>
          <Info>{id}</Info>
          {functionalities[0] === 'Power liftgate' ? (
            <Info>Power liftgate</Info>
          ) : (
            <Info>{accessories[2]}</Info>
          )}
        </InfoWrapper>
      </DescriptionWrapper>
      <LinkButton onClick={toggleModal}>Learn More</LinkButton>
      {showModal && (
        <Modal onClick={toggleModal}>
          <CardFull id={id} />
        </Modal>
      )}
    </CardWrapper>
  );
};

export default Card;
