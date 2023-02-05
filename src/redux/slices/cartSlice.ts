import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
export type TCartItems = {
  id: string
  title: string
  price: number
  imageUrl: string
  size: number
  type: string
  count: number
}
type TInitialState = {
  cartItems: TCartItems[]
  totalPrice: number
}

const initialState: TInitialState = {
  cartItems: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<TCartItems>) {
      const findItem = state.cartItems.find(
        obj => obj.id === payload.id && obj.size === payload.size && obj.size === payload.size,
      )
      if (findItem) {
        findItem.count++
      } else {
        state.cartItems.push({
          ...payload,
          count: 1,
        })
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    minusCartItem(state, { payload }) {
      const findItem = state.cartItems.find(
        obj => obj.id === payload.id && obj.size === payload.size && obj.type === payload.type,
      )
      if (findItem) {
        findItem.count--
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    removeCartItem(state, { payload }) {
      const findItem = state.cartItems.find(obj => {
        return obj.id === payload.id && obj.size === payload.size && obj.type === payload.type
      })

      if (findItem) {
        state.totalPrice -= findItem.price * findItem.count
      }

      state.cartItems = state.cartItems.filter(obj => {
        return obj.id !== payload.id || obj.size !== payload.size || obj.type !== payload.type
      })
    },
    clearItems(state) {
      state.cartItems = []
      state.totalPrice = 0
    },
  },
})
export const cartSelectorById = (id: string) => (state: RootState) =>
  state.cart.cartItems.filter(obj => obj.id === id)
export const cartSelector = (state: RootState) => state.cart
export const { addToCart, minusCartItem, clearItems, removeCartItem } = cartSlice.actions
export default cartSlice.reducer
