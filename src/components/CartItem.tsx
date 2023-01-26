import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../styles/colors'
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
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          marginRight: 30,
        }}
      >
        <Text style={globalStyles.titleStyle}>{title}</Text>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{ uri: imageUrl }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 18, color: colors.black }}>Товщина тіста:</Text>
        <Text style={{ color: colors.orange, fontSize: 20 }}>{type}</Text>
        <Text style={{ fontSize: 18, color: colors.black }}>Розмір:</Text>
        <Text style={{ color: colors.orange, fontSize: 20 }}>{size}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
          }}
        >
          <AntDesign
            name='minuscircle'
            color={colors.orange}
            size={35}
          />
          <Text style={{ paddingHorizontal: 5, fontSize: 20, color: colors.orange }}>{count}</Text>
          <AntDesign
            color={colors.orange}
            name='pluscircle'
            size={35}
          />
        </View>
      </View>
    </View>
  )
}
