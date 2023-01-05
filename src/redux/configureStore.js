import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CarReducers from './store/store';
import reservationReducer from './reducers/reserve';
import myReservationReducer from './reducers/myReservations';


const rootReducer = combineReducers({
  CarReducers,
  reserve: reservationReducer,
  reservation: myReservationReducer,
});

const store = configureStore({
  reducer: rootReducer,
  
  
});


export default store;
