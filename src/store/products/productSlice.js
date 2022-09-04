import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tags: {},
  brands: {},
  products: [],
  orderData: {},
  tagFilters: [],
  brandFilters: []
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
    },
    setTagFilter: (state, action) => {
      if (!state.tagFilters.includes(action.payload)) {
        state.tagFilters.push(action.payload)
      } else {
        const index = state.tagFilters.indexOf(action.payload)
        state.tagFilters.splice(index, 1)
      }
    },
    setBrandFilter: (state, action) => {
      console.log(action.payload)
      if (!state.brandFilters.includes(action.payload)) {
        state.brandFilters.push(action.payload)
      } else {
        const index = state.brandFilters.indexOf(action.payload)
        state.brandFilters.splice(index, 1)
      }
    }
  }
})

export const {
  setProductsData,
  setAllProductsData,
  setOrderData,
  setTagFilter,
  setBrandFilter
} = productsSlice.actions

export default productsSlice.reducer
