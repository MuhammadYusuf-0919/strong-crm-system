// store.ts
import { configureStore } from '@reduxjs/toolkit';
import configReducer from './configSlice';
import crudReducer from './crudSlice';

const rootReducer = {
  crud: crudReducer,
  config: configReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Define RootState
export type RootState = ReturnType<typeof rootReducer>;
