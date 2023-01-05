import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CarReducers from './store/store';

const rootReducer = combineReducers({
  CarReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;