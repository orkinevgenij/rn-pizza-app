import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'
import { CartEmpty } from '../components/CartEmpty'
import { CartItem } from '../components/CartItem'
import { cartSelector, clearItems } from '../redux/slices/cartSlice'
import { useAppDispatch } from '../redux/store'
import colors from '../styles/colors'
import { globalStyles } from '../styles/globalStyles'
import { HomeStackParams } from '../types/types'

type TProps = {
  navigation: NativeStackNavigationProp<HomeStackParams>
}

export const CartScreen: React.FC<TProps> = ({ navigation }) => {
  const { cartItems, totalPrice } = useSelector(cartSelector)
  const dispatch = useAppDispatch()

  const onClickOrderPizzas = () => {
    navigation.navigate('OrderScreen')
    dispatch(clearItems())
  }
  if (!totalPrice) {
    return <CartEmpty />
  }
  return (
    <View style={globalStyles.container}>
      <FlashList
        data={cartItems}
        renderItem={({ item }) => <CartItem {...item} />}
        estimatedItemSize={200}
      />
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          onPress={onClickOrderPizzas}
          activeOpacity={0.5}
          style={{
            backgroundColor: colors.orange,
            paddingHorizontal: 15,
            paddingVertical: 15,
            width: '70%',
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
            }}
          >
            Оформити заказ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Ви точно бажаєте очистити кошик?',
              '',
              [
                {
                  text: 'Очистити',
                  onPress: () => dispatch(clearItems()),
                },
                {
                  text: 'Скасувати',
                  style: 'cancel',
                },
              ],
              { cancelable: true },
            )
          }
          style={{
            backgroundColor: 'red',
            paddingHorizontal: 15,
            paddingVertical: 15,
            alignItems: 'center',
            width: '30%',
          }}
        >
          <MaterialIcons
            name='cleaning-services'
            size={25}
            color='#fff'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
