/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
};

export const getUser = createAsyncThunk(
  'users/auth',
  async () => {
    const response = await fetch('http://127.0.0.1:3001/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    // console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const getuserauthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export default getuserauthSlice.reducer;
