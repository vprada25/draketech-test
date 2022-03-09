import { configureStore } from "@reduxjs/toolkit";
import RootReducers from './Reducers';

const Store = configureStore({
  reducer: {
    RootReducers,
  },
  devTools: true,
  middleware: [],
});

export default Store;



