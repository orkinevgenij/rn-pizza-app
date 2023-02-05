import { FlashList } from '@shopify/flash-list'
import React, { useCallback, useEffect } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import Categories from '../components/Categories'
import { Loader } from '../components/Loader'
import { PizzaItem } from '../components/PizzaItem'
import { SnackBar } from '../components/SnackBar'
import { SortModal } from '../components/SortModal'
import { filterSelector, setCategoryId } from '../redux/slices/filterPizzaSlice'
import { fetchPizzas, pizzaSelector, Status } from '../redux/slices/pizzaSlice'
import { useAppDispatch } from '../redux/store'
import { globalStyles } from '../styles/globalStyles'

export const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const { categoryId, sort, orderType } = useSelector(filterSelector)
  const { status, pizzas } = useSelector(pizzaSelector)

  const onChangeCategoryId = useCallback((index: number) => {
    dispatch(setCategoryId(index))
  }, [])
  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const getPizzas = async () => {
      dispatch(
        fetchPizzas({
          category,
          sort,
          orderType,
        }),
      )
    }

    getPizzas()
  }, [categoryId, sort.sortProperty, orderType])
  return (
    <View style={globalStyles.container}>
      <Categories onChangeCategoryId={onChangeCategoryId} />
      <SortModal />
      {status === Status.LOADING ? (
        <Loader />
      ) : (
        <FlashList
          data={pizzas}
          estimatedItemSize={500}
          renderItem={({ item }) => {
            return <PizzaItem {...item} />
          }}
        />
      )}
      <SnackBar status={status} />
    </View>
  )
}
