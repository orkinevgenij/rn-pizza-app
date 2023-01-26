import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from './slices/pizzaSlice'
import filterPizzaSlice from './slices/filterPizzaSlice'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
  reducer: { pizza: pizzaSlice, filter: filterPizzaSlice, cart: cartSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
