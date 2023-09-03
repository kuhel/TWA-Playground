import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'store/slices/appSlice';
import postReducer from 'store/slices/postSlice';

const store = configureStore({
   reducer: {
      app: appReducer,
      post: postReducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
