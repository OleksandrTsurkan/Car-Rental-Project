import { createSlice } from '@reduxjs/toolkit';
import { favoritesInitialState } from './initialState';
import { fetchFavorites, addFavorite, deleteFavorite } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    setFavoriteIcon: (state, action) => {
      const { id, isFavorite } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex].isFavorite = isFavorite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavorites.pending, handlePending)
      .addCase(fetchFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchFavorites.rejected, handleRejected)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(deleteFavorite.pending, handlePending)
      .addCase(deleteFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          favorite => favorite._id === payload._id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteFavorite.rejected, handleRejected);
  },
});
export const { setFavoriteIcon } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
