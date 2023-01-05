import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_CAR = 'car_reservation/store/GET_CAR';

const initialeState = [];

const ApiUrl = 'api/v1/cars';

const CarReducers = (state = initialeState, action = {}) => {
  switch (action.type) {
    case `${GET_CAR}/fulfilled`:
      return action.payload;

    default:
      return state;
  }
};

export const FetchCar = createAsyncThunk(GET_CAR, async () => {
  const response = await fetch(ApiUrl, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const value = await response.json();
  return value;
});

export default CarReducers;
