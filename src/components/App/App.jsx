import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts, fetchFavorites } from 'redux/operations';

const Home = lazy(() => import('pages/Home'));
const Favorites = lazy(() => import('pages/Favorites'));
const Advertisement = lazy(() => import('pages/Advertisement'));

export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/advertisement" element={<Advertisement />}></Route>
      <Route path="/advertisement/favorites" element={<Favorites />} />
    </Routes>
  );
};
