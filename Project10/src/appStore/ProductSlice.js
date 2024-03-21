import {createSlice} from '@reduxjs/toolkit';
import {PRODUCTS_LIST} from '../data/constants';

const initialState = {
  products: PRODUCTS_LIST,
};

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProductById = (state, productId) =>
  state.products.products.find(product => product.id === productId);

export default ProductSlice.reducer;
