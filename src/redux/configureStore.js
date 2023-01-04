import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import detailsSlice from './details/detailsSlice';
import CarReducers from './store/store';

const rootReducer = combineReducers({
  cars: detailsSlice, CarReducers,

});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
