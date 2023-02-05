import React from 'react'
import { Text } from 'react-native'
import { Snackbar } from 'react-native-paper'
import { fetchPizzas, Status, TFetchPizzasArgs } from '../redux/slices/pizzaSlice'
import { useAppDispatch } from '../redux/store'
import colors from '../styles/colors'

type TProps = {
  status: Status
}
export const SnackBar: React.FC<TProps> = ({ status }) => {
  const [visible, setVisible] = React.useState(true)
  const dispatch = useAppDispatch()

  const onDismissSnackBar = () => setVisible(false)
  return (
    <Snackbar
      style={{
        backgroundColor: colors.orange,
      }}
      visible={status === Status.ERROR}
      onDismiss={onDismissSnackBar}
      action={{
        color: '#fff',
        labelStyle: {
          color: '#fff',
          fontSize: 15,
        },
        label: 'Повторити',
        onPress: () => {
          dispatch(fetchPizzas({} as TFetchPizzasArgs))
        },
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 15,
        }}
      >
        Сталася помилка
      </Text>
    </Snackbar>
  )
}
