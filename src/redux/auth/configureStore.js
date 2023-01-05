import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './authSlice/authSlice';

import authReducer from './authSlice/getauthuser';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
