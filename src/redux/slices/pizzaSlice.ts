import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'
import { TSort } from './filterPizzaSlice'

export type TFetchPizzasArgs = {
  sort: TSort
  category: string
}

export type TPizza = {
  id: string
  title: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
interface IPizzaSliceState {
  pizzas: TPizza[]
  status: Status
}
const initialState: IPizzaSliceState = {
  pizzas: [],
  status: Status.LOADING, //| 'success' | 'error',
}
export const fetchPizzas = createAsyncThunk<TPizza[], TFetchPizzasArgs>(
  'pizza/fetchPizzaStatus',
  async params => {
    const { sort, category } = params
    const { data } = await axios.get<TPizza[]>(
      `https://63cadd354f53a004202cba12.mockapi.io/items?${category}&sortBy=${sort.sortProperty}`,
    )
    return data
  },
)
export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, state => {
      state.status = Status.LOADING
      state.pizzas = []
    })

    builder.addCase(fetchPizzas.fulfilled, (state, { payload }) => {
      state.status = Status.SUCCESS
      state.pizzas = payload
    })
    builder.addCase(fetchPizzas.rejected, state => {
      state.status = Status.ERROR
      state.pizzas = []
    })
  },
})

export const pizzaSelector = (state: RootState) => state.pizza

export default pizzaSlice.reducer
