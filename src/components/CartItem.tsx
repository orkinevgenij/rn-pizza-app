import React from 'react'
import { Image, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { addToCart, minusCartItem, removeCartItem, TCartItems } from '../redux/slices/cartSlice'
import { useAppDispatch } from '../redux/store'
import colors from '../styles/colors'
import { globalStyles } from '../styles/globalStyles'

type TProps = {
  id: string
  title: string
  price: number
  imageUrl: string
  size: number
  type: string
  count: number
}
export const CartItem: React.FC<TProps> = ({ id, title, imageUrl, size, type, count }) => {
  const dispatch = useAppDispatch()

  const onClickPlus = () => {
    dispatch(addToCart({ id, size, type } as TCartItems))
  }
  const onClickMinus = () => {
    if (count > 1) dispatch(minusCartItem({ id, size, type } as TCartItems))
  }
  const onClickRemove = (id: string) => {
    dispatch(removeCartItem({ id, size, type } as TCartItems))
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{ uri: imageUrl }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
          }}
        >
          <AntDesign
            onPress={onClickMinus}
            name='minuscircle'
            color={colors.orange}
            size={35}
          />
          <Text style={{ paddingHorizontal: 5, fontSize: 20, color: colors.orange }}>{count}</Text>
          <AntDesign
            onPress={onClickPlus}
            color={colors.orange}
            name='pluscircle'
            size={35}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <AntDesign
          onPress={() => onClickRemove(id)}
          name='close'
          size={32}
          style={{
            color: colors.orange,
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        />
        <Text style={globalStyles.titleStyle}>{title}</Text>
        <Text style={{ fontSize: 18, color: colors.black }}>Товщина тіста:</Text>
        <Text style={{ color: colors.orange, fontSize: 16 }}>{type}</Text>
        <Text style={{ fontSize: 18, color: colors.black }}>Розмір:</Text>
        <Text style={{ color: colors.orange, fontSize: 16 }}>{size}</Text>
      </View>
    </View>
  )
}
