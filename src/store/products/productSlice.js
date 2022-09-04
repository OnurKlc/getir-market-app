import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tags: {},
  brands: {},
  products: [],
  orderData: {}
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.products = action.payload
    },
    setAllProductsData: (state, action) => {
      action.payload.forEach((product) => {
        state.brands[product.manufacturer] =
          (state.brands[product.manufacturer] || 0) + 1
        product.tags.forEach((tag) => {
          state.tags[tag] = (state.tags[tag] || 0) + 1
        })
      })
    },
    setOrderData: (state, action) => {
      state.orderData = { ...action.payload }
    }
  }
})

export const { setProductsData, setAllProductsData, setOrderData } =
  productsSlice.actions

export default productsSlice.reducer
