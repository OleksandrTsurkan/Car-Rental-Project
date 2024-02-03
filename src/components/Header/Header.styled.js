import styled from 'styled-components';import { AiFillCar } from 'react-icons/ai';
import { AiTwotoneRocket } from 'react-icons/ai';

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 2px solid var(--color-text-prescription);
  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    padding: 12px 18px;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    padding: 19px 26px;
  }

  @media (min-width: 1440px) {
    padding: 10px 200px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  &:hover,
  &:focus {
    color: var(--color-hover);
  }
  &.active {
    color: var(--color-hover);
  }
`;

export const Logo = styled.p`
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: var(--color-accent);
  transition: transform 0.8s var(--timing-function),
    color 3s var(--timing-function);
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
    color: var(--color-hover);
  }
`;

export const MdCarRentalStyled = styled(AiFillCar)`
  color: var(--color-accent);
  width: 36px;
  height: 36px;
  transition: transform 0.8s var(--timing-function),
    color 3s var(--timing-function);
  &:hover {
    transform: scale(1.15);
    color: var(--color-hover);
  }
`;

export const AiTwotoneRocketStyled = styled(AiTwotoneRocket)`
  color: var(--color-accent);
  width: 36px;
  height: 36px;
  transition: transform 0.8s var(--timing-function),
    color 3s var(--timing-function);
  &:hover {
    transform: scale(1.15);
    color: var(--color-hover);
  }
`;