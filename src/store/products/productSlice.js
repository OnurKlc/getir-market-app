import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tags: {},
  brands: {},
  products: [],
  orderData: {},
  tagFilters: [],
  brandFilters: [],
  basketProducts: [],
  totalPrice: 0
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData: (state, { payload }) => {
      state.products = payload
    },
    setAllProductsData: (state, { payload }) => {
      payload.forEach((product) => {
        state.brands[product.manufacturer] =
          (state.brands[product.manufacturer] || 0) + 1
        product.tags.forEach((tag) => {
          state.tags[tag] = (state.tags[tag] || 0) + 1
        })
      })
    },
    setOrderData: (state, { payload }) => {
      state.orderData = { ...payload }
    },
    setTagFilter: (state, { payload }) => {
      if (!state.tagFilters.includes(payload)) {
        state.tagFilters.push(payload)
      } else {
        const index = state.tagFilters.indexOf(payload)
        state.tagFilters.splice(index, 1)
      }
    },
    setBrandFilter: (state, { payload }) => {
      if (!state.brandFilters.includes(payload)) {
        state.brandFilters.push(payload)
      } else {
        const index = state.brandFilters.indexOf(payload)
        state.brandFilters.splice(index, 1)
      }
    },
    addToBasketProducts: (state, { payload }) => {
      const isAlreadyAdded = state.basketProducts.findIndex(
        (basketProduct) => basketProduct.added === payload.added
      )
      if (isAlreadyAdded !== -1) return

      state.basketProducts.push(payload)
      state.totalPrice = state.basketProducts
        .reduce(
          (total, product) => product.price * product.basketAmount + total,
          0
        )
        .toFixed(2)
    },
    decreaseBasketAmount: (state, { payload }) => {
      state.basketProducts.forEach((product) => {
        if (product.added === payload) {
          product.basketAmount -= 1
        }
      })
      state.totalPrice = state.basketProducts
        .reduce(
          (total, product) => product.price * product.basketAmount + total,
          0
        )
        .toFixed(2)
    },
    increaseBasketAmount: (state, { payload }) => {
      state.basketProducts.forEach((product) => {
        if (product.added === payload) {
          product.basketAmount += 1
        }
      })
      state.totalPrice = state.basketProducts
        .reduce(
          (total, product) => product.price * product.basketAmount + total,
          0
        )
        .toFixed(2)
    }
  }
})

export const {
  setProductsData,
  setAllProductsData,
  setOrderData,
  setTagFilter,
  setBrandFilter,
  addToBasketProducts,
  decreaseBasketAmount,
  increaseBasketAmount
} = productsSlice.actions

export default productsSlice.reducer
