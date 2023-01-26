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
    clearItems(state) {
      state.cartItems = []
      state.totalPrice = 0
    },
  },
})

export const cartSelector = (state: RootState) => state.cart
export const { addToCart, clearItems } = cartSlice.actions
export default cartSlice.reducer
