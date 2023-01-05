import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CarReducers from './store/store';
import userReducer from './auth/authSlice/authSlice';
import authReducer from './auth/authSlice/getauthuser';

const rootReducer = combineReducers({
  CarReducers,

});

const store = configureStore({
  reducer: rootReducer,
  user: userReducer,
  auth: authReducer,
});

export default store;
