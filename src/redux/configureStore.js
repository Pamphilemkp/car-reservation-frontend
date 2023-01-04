import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import detailsSlice from './details/detailsSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CarReducers from './store/store';

const rootReducer = combineReducers({
  cars: detailsSlice,


const rootReducer = combineReducers({
  CarReducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
