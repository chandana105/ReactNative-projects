import {configureStore} from '@reduxjs/toolkit';
import productReducer from './ProductSlice';

const appStore = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default appStore;
