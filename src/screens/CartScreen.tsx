import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { add } from 'react-native-reanimated'
import { useSelector } from 'react-redux'
import { CartItem } from '../components/CartItem'
import { addToCart, cartSelector, clearItems } from '../redux/slices/cartSlice'
import { useAppDispatch } from '../redux/store'
import colors from '../styles/colors'
import { globalStyles } from '../styles/globalStyles'

export const CartScreen: React.FC = () => {
  const { cartItems } = useSelector(cartSelector)
  const dispatch = useAppDispatch()
  return (
    <View style={globalStyles.container}>
      <FlashList
        data={cartItems}
        renderItem={({ item }) => <CartItem {...item} />}
        estimatedItemSize={200}
      />
      {cartItems.length > 0 && (
        <TouchableOpacity
          onPress={() => dispatch(clearItems())}
          activeOpacity={0.5}
          style={{
            backgroundColor: colors.orange,
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
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
      )}
    </View>
  )
}
