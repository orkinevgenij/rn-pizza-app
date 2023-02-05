import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSelector } from 'react-redux'
import { addToCart, cartSelectorById, TCartItems } from '../redux/slices/cartSlice'
import { useAppDispatch } from '../redux/store'
import colors from '../styles/colors'
import { globalStyles } from '../styles/globalStyles'

type TProps = {
  id: string
  title: string
  price: number
  imageUrl: string
  types: number[]
  sizes: number[]
}

const typesNames = ['Тонке', 'Класичне']

export const PizzaItem: React.FC<TProps> = ({ id, title, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)
  const dispatch = useAppDispatch()
  const cartItems = useSelector(cartSelectorById(id))
  const addedCount = cartItems.reduce((sum: number, item: any) => sum + item.count, 0)
  const progress = useSharedValue(0)

  const onClickToCart = () => {
    const item: TCartItems = {
      id,
      title,
      price,
      imageUrl,
      type: typesNames[activeType],
      size: sizes[activeSize],
      count: 0,
    }
    dispatch(addToCart(item))
  }

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    }
  }, [])
  useEffect(() => {
    progress.value = withTiming(1, { duration: 1500 })
  }, [])
  return (
    <View style={globalStyles.container}>
      <Animated.View style={[{ alignItems: 'center', marginBottom: 30 }, reanimatedStyle]}>
        <Text style={globalStyles.titleStyle}>{title}</Text>
        <Image
          style={{
            width: 250,
            height: 250,
          }}
          source={{
            uri: imageUrl,
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          {types.map(typeId => (
            <Text
              key={typeId}
              onPress={() => setActiveType(typeId)}
              style={[globalStyles.typeStyle, activeType === typeId && globalStyles.active]}
            >
              {typesNames[typeId]}
            </Text>
          ))}
        </View>
        <View style={{ flexDirection: 'row' }}>
          {sizes.map((size, index) => (
            <Text
              key={index}
              onPress={() => setActiveSize(index)}
              style={[globalStyles.sizeStyle, activeSize === index && globalStyles.active]}
            >
              {size}
            </Text>
          ))}
        </View>
        <TouchableOpacity
          onPress={onClickToCart}
          activeOpacity={0.6}
          style={[
            globalStyles.buttonStyle,
            {
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}
        >
          <Text
            style={{
              color: '#fff',
              marginRight: 5,
              fontSize: 15,
            }}
          >
            Додати
          </Text>
          {addedCount > 0 && (
            <Text
              style={{
                color: colors.orange,
                borderRadius: 100,
                backgroundColor: '#fff',
                width: 25,
                height: 25,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}
            >
              {addedCount}
            </Text>
          )}
        </TouchableOpacity>
        <Text style={[globalStyles.textStyle, { marginTop: 10 }]}>От {price} грн</Text>
      </Animated.View>
    </View>
  )
}
