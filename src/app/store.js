import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  //think of reducer as the data-layer(the onion) tht holds the slices
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
