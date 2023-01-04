import logger from 'redux-logger';
import  createLogger  from 'redux-logger'
import thunk from 'redux-thunk';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import detailsSlice from './details/detailsSlice';
import CarReducers from './store/store';

const rootReducer = combineReducers({
  cars: detailsSlice, CarReducers,

});


const logger = createLogger({
  //empty options
});

const store = configureStore({
  reducer: rootReducer,applyMiddlewar
  : [thunk, logger],
});

export default store;
