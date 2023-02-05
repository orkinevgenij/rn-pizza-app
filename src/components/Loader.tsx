import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import colors from '../styles/colors'

export const Loader: React.FC = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text
        style={{
          fontSize: 20,
          color: colors.orange,
        }}
      >
        Зачейкате...
      </Text>
      <ActivityIndicator
        size={'large'}
        color={colors.orange}
      />
    </View>
  )
}
