import React from 'react'
import { Text, View } from 'react-native'
import colors from '../styles/colors'
import { globalStyles } from '../styles/globalStyles'

export const OrderScreen: React.FC = () => {
  return (
    <View
      style={[
        globalStyles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
        },
      ]}
    >
      <Text
        style={{
          color: colors.orange,
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        Ви оформили ваше замовлення! Чекайте на дзвінок менеджера
      </Text>
    </View>
  )
}
