import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { advertsInitialState } from './initialState';
import { fetchAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const loadMoreAdverts = createAsyncThunk(
  'adverts/loadMore',
  async (page, { dispatch }) => {
    try {
      const response = await fetchAdverts(page);
      dispatch(advertsSlice.actions.addAdverts(response));
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(loadMoreAdverts.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload];
      });
  },
});
export const { addAdverts } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
