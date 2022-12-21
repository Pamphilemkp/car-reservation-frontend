import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import detailsSlice from './details/detailsSlice';

const rootReducer = combineReducers({
  cars: detailsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
