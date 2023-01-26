import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum SortPropertyEnum {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}
export type TSort = {
  name: string
  sortProperty: SortPropertyEnum
}

type TFilterSliceState = {
  categoryId: number
  sort: TSort
}
const initialState: TFilterSliceState = {
  categoryId: 0,
  sort: {
    name: 'По популярности',
    sortProperty: SortPropertyEnum.RATING,
  },
}

const filterPizzaSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, { payload }: PayloadAction<number>) {
      state.categoryId = payload
    },
    setSortType(state, { payload }) {
      state.sort = payload
    },
  },
})
export const filterSelector = (state: RootState) => state.filter

export const { setCategoryId, setSortType } = filterPizzaSlice.actions
export default filterPizzaSlice.reducer
