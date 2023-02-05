import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import colors from '../styles/colors'
import { globalStyles } from '../styles/globalStyles'
import { HomeStackNavigation } from '../types/types'

export const CartEmpty: React.FC = () => {
  const navigation = useNavigation<HomeStackNavigation>()
  return (
    <View
      style={[
        globalStyles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={require('../assets/img/empty-cart.png')}
      />
      <Text
        style={{
          color: colors.orange,
          fontSize: 25,
          marginBottom: 10,
        }}
      >
        Кошик порожній 😕
      </Text>
      <Text
        style={{
          color: colors.orange,
          fontSize: 18,
          marginBottom: 30,
        }}
      >
        Найімовірніше ви не зробили замовлення
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text
          style={[
            globalStyles.buttonStyle,
            {
              fontSize: 20,
            },
          ]}
        >
          Назад
        </Text>
      </TouchableOpacity>
    </View>
  )
}
