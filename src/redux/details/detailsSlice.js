import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// API url
const baseApi = '/api/v1/cars/';

// Initialize state
const initialState = [];

export const fetchCars = createAsyncThunk('details/fetchCars', async () => {
  try {
    const response = await axios.get(baseApi, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const detailsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => action.payload,
  },
});

export default detailsSlice.reducer;
